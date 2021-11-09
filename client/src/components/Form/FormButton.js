import styled from 'styled-components'

const FormButton = styled.button`
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: white;
  width: 100%;
  height: 42px;
  border-radius: 16px;
  margin-bottom: 7px;
  padding: 1px 12px;
  font-size: 15px;
  background-color: var(--${props => props.backgroundColor});

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`

export default FormButton