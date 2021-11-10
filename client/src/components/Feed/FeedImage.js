import React from 'react'
import styled from 'styled-components'
import SaveButton from './SaveButton'

const SaveButtonWrapper = styled.div``
const ImageWrapper = styled.div``

const ImageContainer = styled.div`
  position: relative;

  img {
    display: block;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }

  &:hover img {
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

const FeedImage = ({ image, handleOpenDialog }) => {
  return (
    <ImageContainer>
      <ImageWrapper onClick={handleOpenDialog}>
        <img src={image.urls.thumb} alt='' />
      </ImageWrapper>
      <SaveButtonWrapper>
        <SaveButton href="/" />
      </SaveButtonWrapper>
    </ImageContainer>
  )
}

export default FeedImage