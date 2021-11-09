import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { search } from '../../services/unsplash'

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

const NavBarSearchBox = ({ setFeedUnits }) => {
  const [query, setQuery] = useState('')

  const handleSearch = async (event) => {
    event.preventDefault()
    try {
      const data = await search({ query: query, per_page: 30 })
      setFeedUnits(data.results)  
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <NavBarSearchBoxWrapper>
      <NavBarSearchBoxContainer>
        <SearchIcon />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit"></button>
        </form>
      </NavBarSearchBoxContainer>
    </NavBarSearchBoxWrapper>
  )
}

export default NavBarSearchBox