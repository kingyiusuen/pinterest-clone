import React, { useState } from 'react'
import ModalUnstyled from '@mui/core/ModalUnstyled'
import { styled } from '@mui/system'
import { useDispatch } from 'react-redux'
import { savePin, deleteSavedPin } from '../../actions/pin'
import './Pin.css'

const Dialog = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
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
    <button
      onClick={handleOnClick}
      class={isSaved ? 'save-btn save-btn--active' : 'save-btn save-btn--inactive'}
    >
      {isSaved ? 'Saved' : 'Save'}
    </button>
  )
}

const Pin = ({ userId, photoUrl, isSaved }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)

  const [showButton, setShowButton] = useState(false)

  return (
    <div>
      <div class='pin__wrapper'>
        <div
          class='pin__container'
          onMouseOver={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
          <div onClick={handleOpenDialog}>
            <img src={`${photoUrl}&w=236`} alt='' />
          </div>
          {
            showButton &&
            <SaveButton userId={userId} photoUrl={photoUrl} isSaved={isSaved} />
          }
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        BackdropComponent={Backdrop}
      >
        <div class='dialog__container'>
          <img src={`${photoUrl}&w=400`} alt='' />
          <SaveButton userId={userId} photoUrl={photoUrl} isSaved={isSaved} />
        </div>
      </Dialog>
    </div>
  )
}

export default Pin