import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'

const FormContainer = styled.div`
  max-width: 464px;
  height: 460px;
  margin: 40px auto 0 auto;
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const FormHeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;

  h1 {
    font-weight: 600;
  }

  h4 {
    font-weight: 400;
  }
`

const FormLogoWrapper = styled.div`
  .MuiSvgIcon-root {
    font-size: 40px;
    color: var(--red);
    padding: 8px;
  }
`

const FormBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 268px;
  margin: 0 auto;

  form > input {
    width: 100%;
    font-size: 16px;
    height: 48px;
    border:1px solid;
    border-color: #ddd;
    border-radius: 16px;
    padding: 1px 16px;
    margin-bottom: 7px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  form > input:hover {
    border-color: #ddd;
  }

  form > input:focus {
    outline: none !important;
    border-color: var(--blue);
    box-shadow: rgb(231, 243, 255) 0px 0px 0px 2px;
  }

  form > input:active {
    border-color: white;
  }
`

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

const FormHeader = () => {
  return (
    <FormHeaderWrapper>
      <FormLogoWrapper>
        <PinterestIcon />
      </FormLogoWrapper>
      <h1>Welcome to Pinterest</h1>
      <h4>Find new ideas to try</h4>
    </FormHeaderWrapper>
  )
}

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

const Form = ({ children, onSubmit }) => {
  return (
    <FormContainer>
      <FormHeader />
      <FormBodyWrapper>
        <form onSubmit={onSubmit}>
          {children}
        </form>
      </FormBodyWrapper>
      <FormFooter />
    </FormContainer>
  )
}

export default Form