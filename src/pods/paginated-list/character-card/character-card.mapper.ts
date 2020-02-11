import { Theme } from '../../../app.theme';

export const mapToBadgeType = (gender: string): keyof Theme['palette']['badges'] => {
  switch (gender) {
    case 'male':
      return 'default2';
    case 'female':
      return 'default3';
    case 'hermaphrodite':
      return 'default4';
    default:
      return 'default';
  }
};

type BattleInfo = {
  type: keyof Theme['palette']['badges'];
  text: 'BBY' | 'ABY';
};

export const mapToBattleInfo = (birthYear: string): BattleInfo => {
  const isBeforeBattle = birthYear.includes('BBY');

  return {
    type: isBeforeBattle ? 'default3' : 'default4',
    text: isBeforeBattle ? 'BBY' : 'ABY',
  };
};
