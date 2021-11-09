import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest'

const NavBarLogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: var(--red);
  }

  .MuiSvgIcon-root:hover {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`

const NavBarLogo = () => {
  return (
    <NavBarLogoWrapper>
      <Link to="/"><PinterestIcon /></Link>
    </NavBarLogoWrapper>
  )
}

export default NavBarLogo
