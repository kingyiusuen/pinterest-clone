import React from 'react'
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest'

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

export default FormHeader