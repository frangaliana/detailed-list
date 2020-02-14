import * as React from 'react';

import { InputStyled, SearchContainer, IconContainer, InputContainer } from './search-input.styled';
import { SearchIcon } from '../../assets/icons';

type SearchInputProps = {
  disabled: boolean;
  handleSearch: (searchText: string) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({ disabled, handleSearch }) => {
  const [searchText, setSearchText] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13 || event.keyCode === 13) handleSearch(searchText);
  };

  return (
    <SearchContainer disabled={disabled}>
      <IconContainer>
        <SearchIcon color={disabled ? 'secondary' : 'primary'} size={3} />
      </IconContainer>
      <InputContainer>
        <InputStyled onChange={onChange} value={searchText} disabled={disabled} onKeyDown={onSubmit} />
      </InputContainer>
    </SearchContainer>
  );
};
