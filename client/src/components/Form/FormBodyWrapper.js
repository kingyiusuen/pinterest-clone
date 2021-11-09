import styled from 'styled-components'

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

export default FormBodyWrapper