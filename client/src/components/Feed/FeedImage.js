import React, { useState } from 'react'
import styled from 'styled-components'
import SaveButton from './SaveButton'

const SaveButtonWrapper = styled.div``
const ImageWrapper = styled.div``

const ImageContainer = styled.div`
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

const FeedImage = ({ photo, top, left, margin, handleOpenDialog }) => {
  const [showSaveButton, setShowSaveButton] = useState(false)
  const handleShowSaveButton = () => setShowSaveButton(true)
  const handleHideSaveButton = () => setShowSaveButton(false)

  return (
    <ImageContainer
      left={left}
      top={top}
      margin={margin}
      height={photo.height}
      width={photo.width}
      onMouseEnter={handleShowSaveButton}
      onMouseLeave={handleHideSaveButton}
    >
      <ImageWrapper onClick={handleOpenDialog}>
        <img alt='' {...photo} />
      </ImageWrapper>
      <SaveButtonWrapper style={{ display: showSaveButton ? 'block': 'none' }}>
        <SaveButton href="/" />
      </SaveButtonWrapper>
    </ImageContainer>
  )
}

export default FeedImage