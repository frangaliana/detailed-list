import * as React from 'react';

import * as VM from '../paginated-list.model';

import { AvatarIcon } from '../../../assets/icons/avatar.icon';
import { Text } from '../../../common/styled-fonts';
import { Badge } from '../../../common';
import {
  Card,
  DescriptionContainer,
  AvatarContainer,
  TitleContainer,
  MoreInfoContainer,
} from './character-card.styled';
import { mapToBadgeType, mapToBattleInfo } from './character-card.mapper';

type CharacterCardProps = {
  character: VM.Character;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const badgeType = mapToBadgeType(character.gender);
  const battleInfo = mapToBattleInfo(character.birthYear);

  return (
    <Card>
      <AvatarContainer>
        <AvatarIcon color="navigationBackground" size={6} />
      </AvatarContainer>
      <DescriptionContainer>
        <TitleContainer>
          <Text bold={true}>{character.name}</Text>
        </TitleContainer>
        <MoreInfoContainer>
          <Badge type={badgeType} text={character.gender} />
          <Badge type={battleInfo.type} transparent={true} text={battleInfo.text} />
        </MoreInfoContainer>
      </DescriptionContainer>
    </Card>
  );
};
