import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { savePin, deleteSavedPin } from '../../actions/pin'

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

const SaveButton = ({ userId, photoUrl, isSaved }) => {
  const dispatch = useDispatch()

  const handleOnClick = event => {
    event.preventDefault()
    isSaved
      ? dispatch(deleteSavedPin(userId, photoUrl))
      : dispatch(savePin(userId, photoUrl))
  }

  return (
    <Button
      onClick={handleOnClick}
      isSaved={isSaved}
    >
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  )
}

export default SaveButton