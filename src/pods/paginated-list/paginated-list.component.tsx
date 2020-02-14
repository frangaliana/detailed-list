import * as React from 'react';

import InfiniteList from 'react-infinite-scroll-component';

import { Spinner } from '../../common';

import * as VM from '../../app.model';

import { Filters } from './filters';
import { ListContainer, NoResultsContainer } from './paginated-list.styled';
import { CharacterCard } from './character-card';
import { Text } from '../../common/styled-fonts';
import { Emoji } from '../../assets/icons/utils';

type ListProps = {
  sortedResults: VM.Character[];
  paginatedResult: VM.PaginatedResponse<VM.Character[]>;
  loadMore: () => void;
  handleSearch: (newSearchText: string) => void;
  handleSortClick: () => void;
  handleCharacterClick: (newCharacter: VM.Character) => void;
  sorted: boolean;
  loading: boolean;
};

export const PaginatedList: React.FC<ListProps> = ({
  paginatedResult,
  sortedResults,
  sorted,
  loading,
  loadMore,
  handleSearch,
  handleSortClick,
  handleCharacterClick,
}) => {
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
              ? paginatedResult.results.map(result => (
                  <CharacterCard handleClick={handleCharacterClick} character={result} key={result.url} />
                ))
              : sortedResults.map(result => (
                  <CharacterCard handleClick={handleCharacterClick} character={result} key={result.url} />
                ))}
          </InfiniteList>
        </ListContainer>
      ) : (
        noResults
      )}
    </>
  );
};
