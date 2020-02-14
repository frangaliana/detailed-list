import * as React from 'react';

import { Link } from 'react-router-dom';
import { BackIcon } from '../../assets/icons';
import { ResultDetailContainer, ActionBarContainer, CharacterContainer } from './result-detail.styled';
import { CharacterDetail } from './character-detail/character-detail.component';

import * as VM from '../../app.model';

type ResultDetailProps = {
  result: VM.Character;
};

export const ResultDetail: React.FC<ResultDetailProps> = ({ result }) => {
  return (
    <ResultDetailContainer>
      <ActionBarContainer>
        <Link to="/">
          <BackIcon color="primary" size={3} />
        </Link>
      </ActionBarContainer>
      <CharacterContainer>
        <CharacterDetail character={result} />
      </CharacterContainer>
    </ResultDetailContainer>
  );
};
