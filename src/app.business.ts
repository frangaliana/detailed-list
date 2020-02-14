import * as VM from './app.model';

const compareFields = <T extends any>(a: T, b: T): number => {
  switch (typeof a) {
    case 'string':
      return a.localeCompare(b);
    default:
      return a <= b ? -1 : 1;
  }
};

export const resultsSortByField = (sortingBy: keyof VM.Character, sortingAsc: boolean) => (
  a: VM.Character,
  b: VM.Character
) => (sortingAsc ? 1 : -1) * compareFields(a[sortingBy], b[sortingBy]);
