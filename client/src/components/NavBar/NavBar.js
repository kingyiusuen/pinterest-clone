import React from 'react'
import styled from 'styled-components'
import NavBarSearchBox from './NavBarSearchBox'
import NavBarLogo from './NavBarLogo'
import NavBarIconGroup from './NavBarIconGroup'

const NavBarContainer = styled.div`
  display: flex;
  height: 56px;
  padding: 16px 16px 4px 16px;

  .MuiSvgIcon-root {
    font-size: 36px;
    padding: 8px;
  }
`

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLogo />
      <NavBarSearchBox />
      <NavBarIconGroup />
    </NavBarContainer>
  )
}

export default NavBar