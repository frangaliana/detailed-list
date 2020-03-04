import * as React from 'react';

import { Link, useParams } from 'react-router-dom';

import { BackIcon } from '../../assets/icons';
import { Spinner } from '../../common';

import * as VM from './result-detail.model';
import { getCharacter } from '../../app.api';

import { ResultDetailContainer, ActionBarContainer, CharacterContainer } from './result-detail.styled';
import { CharacterDetail } from './character-detail/character-detail.component';

type ResultDetailProps = {};

export const ResultDetail: React.FC<ResultDetailProps> = ({}) => {
  const { characterId } = useParams();

  const [loading, setLoading] = React.useState(true);
  const [character, setCharacter] = React.useState<VM.Character>(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!!characterId) {
      setLoading(true);

      getCharacter(`https://swapi.co/api/people/${characterId}`)
        .then(response => {
          setLoading(false);

          setCharacter(response);
        })
        .catch(error =>
          setError(() => {
            throw error;
          })
        );
    }
  }, [characterId]);

  return (
    <ResultDetailContainer>
      {loading || !character ? (
        <Spinner />
      ) : (
        <>
          <ActionBarContainer>
            <Link to="/">
              <BackIcon color="primary" size={3} />
            </Link>
          </ActionBarContainer>
          <CharacterContainer>
            <CharacterDetail character={character} />
          </CharacterContainer>
        </>
      )}
    </ResultDetailContainer>
  );
};
