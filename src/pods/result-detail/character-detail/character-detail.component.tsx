import * as React from 'react';

import * as VM from '../result-detail.model';

import {
  CharacterDetailContainer,
  MainInformation,
  AvatarContainer,
  TitleContainer,
  AdditionalInformation,
  BadgeContainer,
  TextContainer,
  ColorsContainer,
  LinksInformation,
  LinkContainer,
} from './character-detail.styled';
import { AvatarIcon } from '../../../assets/icons';

import { Text } from '../../../common/styled-fonts';
import { Badge, ActionButton } from '../../../common';

import { mapToBadgeType, mapToBattleInfo } from '../result-detail.mapper';

type CharacterDetailProps = {
  character: VM.Character;
};

export const CharacterDetail: React.FC<CharacterDetailProps> = ({ character }) => {
  const badgeType = mapToBadgeType(character.gender);
  const battleInfo = mapToBattleInfo(character.birthYear);

  return (
    <CharacterDetailContainer>
      <MainInformation>
        <AvatarContainer>
          <AvatarIcon size={12} color="navigationBackground" />
        </AvatarContainer>
        <TitleContainer>
          <Text size={3} bold={true} textAlign="end">
            {character.name}
          </Text>
          <BadgeContainer>
            <Badge type={badgeType} text={character.gender} />
          </BadgeContainer>
          <BadgeContainer>
            <Badge type={battleInfo.type} transparent={true} text={battleInfo.text} />
          </BadgeContainer>
        </TitleContainer>
      </MainInformation>
      <AdditionalInformation>
        <Text size={1.9}>{`Mass: ${character.mass} kg`}</Text>
        <TextContainer>
          <Text size={1.9}>{`Height: ${character.height} cm`}</Text>
        </TextContainer>
      </AdditionalInformation>
      <ColorsContainer>
        <TextContainer>
          <Text size={1.9}>{`Skin: ${character.skinColor}`}</Text>
        </TextContainer>
        <TextContainer>
          <Text size={1.9}>{`Hair color: ${character.hairColor}`}</Text>
        </TextContainer>
        <TextContainer>
          <Text size={1.9}>{`Eye color: ${character.eyeColor}`}</Text>
        </TextContainer>
      </ColorsContainer>
      <LinksInformation>
        <LinkContainer>
          <ActionButton
            height={5}
            width={20}
            title={'Ver sus películas'}
            handleClick={null}
            iconSize={3}
            isCard={true}
          />
        </LinkContainer>
        <LinkContainer>
          <ActionButton
            height={5}
            width={20}
            title={'Ver sus vehículos'}
            handleClick={null}
            iconSize={3}
            isCard={true}
          />
        </LinkContainer>
        <LinkContainer>
          <ActionButton height={5} width={20} title={'Ver sus naves'} handleClick={null} iconSize={3} isCard={true} />
        </LinkContainer>
        <LinkContainer>
          <ActionButton
            height={5}
            width={20}
            title={'Ver sus especies'}
            handleClick={null}
            iconSize={3}
            isCard={true}
          />
        </LinkContainer>
      </LinksInformation>
    </CharacterDetailContainer>
  );
};
