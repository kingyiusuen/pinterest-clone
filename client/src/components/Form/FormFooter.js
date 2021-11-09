import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterWrapper = styled.div`
  align-self: center;
  margin-top: auto;
  display: flex;
  flex-direction: row;
`

const FooterIconWrapper = styled.div`
  .MuiSvgIcon-root {
    font-size: 36px;
    padding: 8px;
    color: rgba(0, 0, 0, 0.7);
  }

  .MuiSvgIcon-root:hover {
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
  }
`

const FooterIcon = ({icon, href}) => {
  return (
    <FooterIconWrapper>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </FooterIconWrapper>
  )
}

const FormFooter = () => {
  return (
    <FooterWrapper>
      <FooterIcon
        icon={<GitHubIcon />}
        href="https://www.github.com/kingyiusuen"
      />
      <FooterIcon
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/kingyiusuen"
      />
    </FooterWrapper>
  )
}

export default FormFooter