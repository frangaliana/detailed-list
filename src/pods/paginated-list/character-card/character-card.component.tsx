import * as React from 'react';

import * as VM from '../paginated-list.model';

import { AvatarIcon } from '../../../assets/icons/avatar.icon';
import { Text } from '../../../common/styled-fonts';
import { Badge } from '../../../common';
import { Card, AvatarContainer, TitleContainer, BadgeContainer, MoreInfoContainer } from './character-card.styled';
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
      <TitleContainer>
        <Text bold={true}>{character.name}</Text>
      </TitleContainer>
      <BadgeContainer>
        <Badge type={badgeType} text={character.gender} />
      </BadgeContainer>
      <MoreInfoContainer>
        <Badge type={battleInfo.type} transparent={true} text={battleInfo.text} />
      </MoreInfoContainer>
    </Card>
  );
};
