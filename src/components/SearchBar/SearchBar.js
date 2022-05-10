import React from "react";
import {SearchBarContainer, SearchBarInput, SearchIconContainer} from "./SearchBar.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({inputValue, onChange}) => {
  return (
    <SearchBarContainer>
      <SearchBarInput 
        type='text'
        value={inputValue} 
        onChange={(e) => onChange(e)}
        placeholder='Search user'
      />
      <SearchIconContainer>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontWeight:'100'}}  />
      </SearchIconContainer>
    </SearchBarContainer>
  )
}
export default SearchBar;