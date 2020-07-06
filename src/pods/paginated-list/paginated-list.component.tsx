import * as React from 'react';

import InfiniteList from 'react-infinite-scroll-component';

import { Spinner } from '../../common';

import * as VM from './paginated-list.model';
import { getCharacters } from './paginated-list.api';
import { resultsSortByField, getPage } from './paginated-list.business';

import { Filters } from './filters';
import { ListContainer, NoResultsContainer } from './paginated-list.styled';

import { CharacterCard } from './character-card';
import { Text } from '../../common/styled-fonts';
import { Emoji } from '../../assets/icons/utils';

type ListProps = {};

export const PaginatedList: React.FC<ListProps> = ({}) => {
  const [loading, setLoading] = React.useState(true);

  const [searchText, setSearchText] = React.useState(null);

  const [sorted, setSorted] = React.useState(false);
  const [sortedResults, setSortedResults] = React.useState<VM.Character[]>(null);

  const [paginatedResult, setPaginatedResult] = React.useState<VM.PaginatedResponse<VM.Character[]>>(null);
  const loadMoreUrl = React.useRef(null);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getCharacters()
      .then((response) => {
        setLoading(false);
        setPaginatedResult(response);
        setSortedResults(!!response && response.results);
      })
      .catch((error) =>
        setError(() => {
          throw error;
        })
      );

    () => setLoading(true);
  }, []);

  React.useEffect(() => {
    loadMoreUrl.current = !!paginatedResult && !!paginatedResult.next ? getPage(paginatedResult.next) : null;
  }, [paginatedResult]);

  const loadMore = () => {
    if (loadMoreUrl.current) {
      getCharacters(`https://swapi.dev/api/people/?page=${loadMoreUrl.current}`)
        .then((response) => {
          setPaginatedResult({
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: [...paginatedResult.results, ...response.results],
          });

          setSortedResults([...sortedResults, ...response.results].sort(resultsSortByField('name', true)));
        })
        .catch((error) =>
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

      getCharacters(`https://swapi.dev/api/people/?search=${searchText}/`)
        .then((response) => {
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
        .catch((error) =>
          setError(() => {
            throw error;
          })
        );
    }
  }, [searchText]);

  const noResults = (
    <NoResultsContainer>
      <Text size={2} bold={true}>
        No se han encontrado resultados
        <Emoji symbol="👻" label="nothing" />
      </Text>
    </NoResultsContainer>
  );

  return (
    <>
      <Filters loading={loading} sorted={sorted} handleSortClick={handleSortClick} handleSearch={handleSearch} />
      {loading ? (
        <Spinner />
      ) : !!paginatedResult && paginatedResult.results.length > 0 ? (
        <ListContainer>
          <InfiniteList
            dataLength={paginatedResult.results.length}
            next={loadMore}
            hasMore={!!paginatedResult.next}
            loader={null}
          >
            {!sorted
              ? paginatedResult.results.map((result) => <CharacterCard character={result} key={result.url} />)
              : sortedResults.map((result) => <CharacterCard character={result} key={result.url} />)}
          </InfiniteList>
        </ListContainer>
      ) : (
        noResults
      )}
    </>
  );
};
