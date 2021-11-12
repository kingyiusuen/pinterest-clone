import React, { useState } from 'react'
import styled from 'styled-components'
import ModalUnstyled from '@mui/core/ModalUnstyled';
import SaveButton from './SaveButton'

const PinWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`

const PinContainer = styled.div`
  margin: 0 auto;
`

const SaveButtonWrapper = styled.div``
const PhotoWrapper = styled.div``

const DialogWrapper = styled(ModalUnstyled)`
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

const DialogContainer = styled.div`
  background-color: white;
  padding: 16px 16px 6px 16px;
  border-radius: 16px;
  align-items: center;
  display: flex;
  flex-direction: column;

  ${SaveButtonWrapper} {
    margin: 0 auto;
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

const Box = styled.div`
  position: relative;

  ${PhotoWrapper} > img {
    display: block;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }

  &:hover ${PhotoWrapper} > img {
    filter: brightness(70%);
  }

  ${SaveButtonWrapper} {
    position: absolute;
    top: 0;
    right: 0;
  }

  &:hover > ${SaveButtonWrapper} {
    opacity: 1;
  }
`

const Pin = ({ userId, photoUrl, isSaved }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)

  const [showButton, setShowButton] = useState(false)

  return (
    <PinWrapper>
      <PinContainer>

        <Box
          onMouseOver={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
          <PhotoWrapper onClick={handleOpenDialog}>
            <img src={`${photoUrl}&w=236`} alt='' />
          </PhotoWrapper>
          {
            showButton &&
            <SaveButtonWrapper>
              <SaveButton userId={userId} photoUrl={photoUrl} isSaved={isSaved} />
            </SaveButtonWrapper>
          }
        </Box>

        <DialogWrapper
          open={openDialog}
          onClose={handleCloseDialog}
          BackdropComponent={Backdrop}
        >
          <DialogContainer>
            <PhotoWrapper>
              <img src={`${photoUrl}&w=400`} alt='' />
            </PhotoWrapper>
            <SaveButtonWrapper>
              <SaveButton userId={userId} photoUrl={photoUrl} isSaved={isSaved} />
            </SaveButtonWrapper>
          </DialogContainer>
        </DialogWrapper>

      </PinContainer>
    </PinWrapper>
  )
}

export default Pin