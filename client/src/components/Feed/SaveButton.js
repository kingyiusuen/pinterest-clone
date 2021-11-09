import styled from 'styled-components'

const SaveButtonContainer = styled.div`
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 24px;
  height: 48px;
  width: 70px;
  background-color: var(--red);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }

  a {
    text-decoration: none;
    color: white;
  }
`

const SaveButton = ({ href }) => {
  return (
    <SaveButtonContainer>
      <a href={href}>Save</a>
    </SaveButtonContainer>
  )
}

export default SaveButton
export { SaveButtonContainer }