import React from 'react'
import styled from 'styled-components'
import ModalUnstyled from '@mui/core/ModalUnstyled';
import SaveButton, { SaveButtonContainer } from './SaveButton'

const SaveButtonWrapper = styled.div``
const ImageWrapper = styled.div``

const FeedDialogWrapper = styled(ModalUnstyled)`
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

const FeedDialogContainer = styled.div`
  background-color: white;
  padding: 16px 16px 6px 16px;
  border-radius: 16px;
  align-items: center;

  ${SaveButtonContainer} {
    margin: 10px auto;
  }
`

const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`

const FeedDialog = ({ photo, openDialog, handleCloseDialog}) => {

  return (
    <FeedDialogWrapper
      open={openDialog}
      onClose={handleCloseDialog}
      BackdropComponent={Backdrop}
    >
      <FeedDialogContainer>
        <ImageWrapper>
          <img src={photo.src} alt='' />
        </ImageWrapper>
        <SaveButtonWrapper>
          <SaveButton href="/" />
        </SaveButtonWrapper>
      </FeedDialogContainer>
    </FeedDialogWrapper>
  )
}

export default FeedDialog