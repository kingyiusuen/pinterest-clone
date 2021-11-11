import styled, { css } from 'styled-components'

const isSavedStyle = css`
  background-color: black;
`

const notSavedStyle = css`
  background-color: var(--red);

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`

const Button = styled.button`
  font-weight: 700;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 24px;
  height: 48px;
  padding: 0 17px;
  margin: 10px;
  ${props => props.isSaved ? isSavedStyle : notSavedStyle}
`

const SaveButton = ({ imageUrl, isSaved }) => {
  //const handleOnClick = () => {
  //  isSaved ? deletePin(imageUrl) : savePin(imageUrl)
  //}

  return (
    <Button
      isSaved={isSaved}
      /*onClick={handleOnClick}*/
    >
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}

export default SaveButton