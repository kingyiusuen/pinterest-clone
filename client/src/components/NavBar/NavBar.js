import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import PinterestIcon from '@mui/icons-material/Pinterest'
import SearchIcon from '@mui/icons-material/Search'
import { searchPins } from '../../actions/pin'
import { logout } from '../../actions/session'

const NavBarContainer = styled.div`
  display: flex;
  height: 56px;
  padding: 16px 16px 4px 16px;

  .MuiSvgIcon-root {
    font-size: 36px;
    padding: 8px;
  }
`

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: var(--red);
  }

  .MuiSvgIcon-root:hover {
    border-radius: 50%;
    background-color: var(--lightgray);
    cursor: pointer;
  }
`

const SearchBoxWrapper = styled.div`
  flex: 1;
  padding: 0 10px;
`

const SearchBoxContainer = styled.div`
  background-color: var(--lightgray);
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.04) 0 0);
  }

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

const IconGroupWrapper = styled.div`
  padding-left: 10px;

  .MuiSvgIcon-root {
    color: var(--gray);
  }

  .MuiSvgIcon-root:hover {
    border-radius: 50%;
    background-color: var(--lightgray);
    cursor: pointer;
  }
`

const IconGroupContainer = styled.div`
  display: flex;
`
const LogoutIconWrapper = styled.div``

const NavBar = () => {
  const dispatch = useDispatch()

  const handleSearch = event => {
    event.preventDefault()
    dispatch(searchPins(event.target.query.value))
  }

  const handleLogout = () => dispatch(logout())

  return (
    <NavBarContainer>
      <LogoWrapper>
        <Link to="/"><PinterestIcon /></Link>
      </LogoWrapper>
      <SearchBoxWrapper>
        <SearchBoxContainer>
          <SearchIcon />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Search'
              name='query'
            />
            <button type='submit'></button>
          </form>
        </SearchBoxContainer>
      </SearchBoxWrapper>
      <IconGroupWrapper>
        <IconGroupContainer>
          <Link to='/profile'>
            <AccountCircleIcon />
          </Link>
          <LogoutIconWrapper onClick={handleLogout}>
            <LogoutIcon />
          </LogoutIconWrapper>
        </IconGroupContainer>
      </IconGroupWrapper>
    </NavBarContainer>
  )
}

export default NavBar