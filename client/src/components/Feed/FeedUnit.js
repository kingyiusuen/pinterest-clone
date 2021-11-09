import React from 'react'
import styled from 'styled-components'
import SaveButton from './SaveButton'

const FeedUnitWrapper = styled.div`
  display: inline-flex;
  width: 100%;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
`

const FeedUnitContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  position: relative;

  img {
    display: block;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }

  &:hover > img {
    filter: brightness(70%);
  }

  &:hover > ${Overlay} {
    opacity: 1;
  }
`

const FeedUnit = ({ url }) => {
  return (
    <FeedUnitWrapper>
      <FeedUnitContainer>
        <img src={url} alt='' />
        <Overlay>
          <SaveButton href="/" />
        </Overlay>
      </FeedUnitContainer>
    </FeedUnitWrapper>
  )
}

export default FeedUnit