import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import Pin from './Pin'

const PinGridWrapper = styled.div`
  padding: 0;
  margin-top: 15px;

  .masonry-grid {
    display: flex;
    width: auto;
  }
`

const PinGrid = ({ photoUrls, savedPins }) => {
  const userId = useSelector(state => state.session.user.id)

  const breakpoints = { default: 4 }
  const baseWidth = 503
  const increment = 252
  for (let i = 0; i < 30; i++) {
    breakpoints[baseWidth + increment * i] = i + 1
  }

  return (
    <PinGridWrapper>
      {
        photoUrls &&
        <Masonry breakpointCols={breakpoints} className='masonry-grid'>
          {
            photoUrls.map((photoUrl, index) => (
              <Pin
                key={index}
                userId={userId}
                photoUrl={photoUrl}
                isSaved={savedPins.includes(photoUrl)}
              />
            ))
          }
        </Masonry>
      }
    </PinGridWrapper>
  )
}

export default PinGrid