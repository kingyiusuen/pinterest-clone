import React from 'react'
import styled from 'styled-components'
import Masonry from '@mui/lab/Masonry';
import FeedUnit from './FeedUnit'

const FeedWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 0px;
  padding: 0 15px;
`

const Feed = ({ feedUnits }) => {
  return (
    <FeedWrapper>
      <Masonry columns={[ '500px', '700px', '900px', '1100px', '1300px' ]} spacing={1}>
        {
          feedUnits !== null &&
          feedUnits.map((image, index) => (
            <FeedUnit
              image={image}
              key={index}
            />
          ))
        }
      </Masonry>
    </FeedWrapper>
  )
}

export default Feed