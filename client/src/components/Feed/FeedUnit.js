import React, { useState } from 'react'
import styled from 'styled-components'
import ModalUnstyled from '@mui/core/ModalUnstyled';
import SaveButton, { SaveButtonContainer } from './SaveButton'

const FeedUnitWrapper = styled.div`
`

const SaveButtonWrapper = styled.div`
`

const StyledModal = styled(ModalUnstyled)`
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

const StyledModalContainer = styled.div`
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

const ImageWrapper = styled.div`
`

const FeedUnitContainer = styled.div`
  img {
    display: block;
    position: absolute;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    margin: ${props => props.margin}px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
  }

  &:hover img {
    filter: brightness(70%);
  }

  ${SaveButtonWrapper} {
    position: absolute;
    top: ${props => props.top + props.margin}px;
    left: ${props => props.left + props.width + props.margin - 90}px;
  }

  &:hover > ${SaveButtonWrapper} {
    opacity: 1;
  }
`

const FeedUnit = ({ index, onClick, photo, margin, top, left }) => {
  const [open, setOpen] = useState(false)
  const [showSaveButton, setShowSaveButton] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleClick = event => {
    onClick(event, { photo, index })
  }

  const handleShowSaveButton = () => setShowSaveButton(true)
  const handleHideSaveButton = () => setShowSaveButton(false)

  return (
    <FeedUnitWrapper>
      <FeedUnitContainer
        left={left}
        top={top}
        margin={margin}
        height={photo.height}
        width={photo.width}
        onMouseEnter={handleShowSaveButton}
        onMouseLeave={handleHideSaveButton}
      >
        <ImageWrapper
          onClick={handleOpen}
        >
          <img
            alt=''
            {...photo}
            onClick={onClick ? handleClick : null}
          />
        </ImageWrapper>
        <SaveButtonWrapper style={{ display: showSaveButton ? 'block': 'none' }}>
          <SaveButton href="/" />
        </SaveButtonWrapper>
      </FeedUnitContainer>
    
      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <StyledModalContainer>
          <ImageWrapper>
            <img src={photo.src} alt='' />
          </ImageWrapper>
          <SaveButtonWrapper>
            <SaveButton href="/" />
          </SaveButtonWrapper>
        </StyledModalContainer>
      </StyledModal>
    </FeedUnitWrapper>
  )
}

export default FeedUnit
