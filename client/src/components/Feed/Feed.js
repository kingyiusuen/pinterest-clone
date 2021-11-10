import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import FeedUnit from './FeedUnit'

const FeedWrapper = styled.div`
  padding: 0;
  margin-top: 15px;

  .my-masonry-grid {
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`

const Feed = ({ feedUnits }) => {
  const breakpoints = {
    default: 4,
    503: 1,
    755: 2,
    1007: 3,
    1259: 4,
    1511: 5,
    1763: 6,
    2015: 7,
    2267: 8
  };

  return (
    <FeedWrapper>
      <Masonry breakpointCols={breakpoints} className='my-masonry-grid'>
        {
          feedUnits !== null &&
          feedUnits.map((image, index) => (
            <FeedUnit image={image} key={index} />
          ))
        }
      </Masonry>
    </FeedWrapper>
  )
}

export default Feed