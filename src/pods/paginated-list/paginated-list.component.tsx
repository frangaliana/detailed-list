import * as React from 'react';

import { getCharacters } from './paginated-list.api';

import InfiniteList from 'react-infinite-scroll-component';

import { Spinner } from '../../common';

import { PaginatedResponse, Character } from './paginated-list.model';
import { CharacterCard } from './character-card/character-card.component';

type ListProps = {};

export const PaginatedList: React.FC<ListProps> = props => {
  const [loading, setLoading] = React.useState(true);

  const [paginatedResult, setPaginatedResult] = React.useState<PaginatedResponse<Character[]>>(null);
  const loadMoreUrl = React.useRef(null);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getCharacters()
      .then(response => {
        setLoading(false);
        setPaginatedResult(response);
      })
      .catch(error =>
        setError(() => {
          throw error;
        })
      );
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
        })
        .catch(error =>
          setError(() => {
            throw error;
          })
        );
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        !!paginatedResult &&
        !!paginatedResult.results && (
          <InfiniteList
            dataLength={paginatedResult.results.length}
            next={loadMore}
            hasMore={!!paginatedResult.next}
            loader={null}
          >
            {paginatedResult.results.map(result => (
              <CharacterCard character={result} key={result.url} />
            ))}
          </InfiniteList>
        )
      )}
    </>
  );
};
