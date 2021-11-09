import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const NavBarSearchBoxWrapper = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`

const NavBarSearchBoxContainer = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 16px;
  }

  form > input:focus {
    outline: none;
  }

  form > button {
    display: none;
  }

  .MuiSvgIcon-root {
    color: var(--gray);
  }
`

const NavBarSearchBox = () => {
  return (
    <NavBarSearchBoxWrapper>
      <NavBarSearchBoxContainer>
        <SearchIcon />
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit"></button>
        </form>
      </NavBarSearchBoxContainer>
    </NavBarSearchBoxWrapper>
  )
}

export default NavBarSearchBox