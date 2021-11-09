import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const NavBarIconGroupWrapper = styled.div`
  display: flex;
  padding-left: 10px;

  .MuiSvgIcon-root {
    color: var(--gray);
  }

  .MuiSvgIcon-root:hover {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`

const NavBarIconGroup = () => {
  return (
    <NavBarIconGroupWrapper>
      <Link to="/login"><AccountCircleIcon /></Link>
      <Link to="/login"><LogoutIcon /></Link>
    </NavBarIconGroupWrapper>
  )
}

export default NavBarIconGroup
