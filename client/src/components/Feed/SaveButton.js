import styled from 'styled-components'

const SaveButtonWrapper = styled.div`
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 24px;
  height: 48px;
  min-width: 70px;
  background-color: var(--red);
  font-size: 14px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

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
    <SaveButtonWrapper>
      <a href={href}>Save</a>
    </SaveButtonWrapper>
  )
}

export default SaveButton