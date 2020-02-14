import * as React from 'react';

import { ThemeStyledProvider } from './providers';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { theme } from './app.theme';
import { ErrorBoundary } from './common';

import { GeneralLayout } from './layouts';

import { Header, PaginatedList, ResultDetail } from './pods';

import * as VM from './app.model';
import { resultsSortByField } from './app.business';
import { getCharacter, getCharacters } from './app.api';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [loading, setLoading] = React.useState(true);

  const [sorted, setSorted] = React.useState(false);
  const [sortedResults, setSortedResults] = React.useState<VM.Character[]>(null);

  const [searchText, setSearchText] = React.useState(null);

  const [paginatedResult, setPaginatedResult] = React.useState<VM.PaginatedResponse<VM.Character[]>>(null);
  const loadMoreUrl = React.useRef(null);

  const [character, setCharacter] = React.useState<VM.Character>(null);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getCharacters()
      .then(response => {
        setLoading(false);
        setPaginatedResult(response);
        setSortedResults(!!response && response.results);
      })
      .catch(error =>
        setError(() => {
          throw error;
        })
      );

    () => setLoading(true);
  }, []);

  React.useEffect(() => {
    loadMoreUrl.current = !!paginatedResult && !!paginatedResult.next ? paginatedResult.next : null;
  }, [paginatedResult]);

  const loadMore = () => {
    if (loadMoreUrl.current) {
      getCharacters(loadMoreUrl.current)
        .then(response => {
          setPaginatedResult({
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: [...paginatedResult.results, ...response.results],
          });

          setSortedResults([...sortedResults, ...response.results].sort(resultsSortByField('name', true)));
        })
        .catch(error =>
          setError(() => {
            throw error;
          })
        );
    }
  };

  const handleSortClick = () => {
    setSorted(!sorted);
    setSortedResults([...sortedResults].sort(resultsSortByField('name', true)));
  };

  const handleSearch = (newSearchText: string) => setSearchText(newSearchText);

  React.useEffect(() => {
    if (!!searchText) {
      setLoading(true);

      getCharacters(`https://swapi.co/api/people/?search=${searchText}`)
        .then(response => {
          setLoading(false);

          setPaginatedResult({
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results.length > 0 ? [...response.results] : [],
          });

          setSortedResults(
            response.results.length > 0 ? [...response.results].sort(resultsSortByField('name', true)) : []
          );
        })
        .catch(error =>
          setError(() => {
            throw error;
          })
        );
    }
  }, [searchText]);

  const handleCharacterClick = (newCharacter: VM.Character) => setCharacter(newCharacter);

  return (
    <ThemeStyledProvider theme={theme}>
      <Router>
        <GeneralLayout
          HeaderContent={<Header />}
          ListContent={
            <ErrorBoundary>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <PaginatedList
                      paginatedResult={paginatedResult}
                      sortedResults={sortedResults}
                      sorted={sorted}
                      loading={loading}
                      loadMore={loadMore}
                      handleSearch={handleSearch}
                      handleSortClick={handleSortClick}
                      handleCharacterClick={handleCharacterClick}
                    />
                  )}
                />
                <Route exact path="/characters/:characterId" render={() => <ResultDetail result={character} />} />
              </Switch>
            </ErrorBoundary>
          }
        />
      </Router>
    </ThemeStyledProvider>
  );
};
