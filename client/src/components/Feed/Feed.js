import React from 'react'
import styled from 'styled-components'
import FeedUnit from './FeedUnit'

const FeedWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 0px;
`

// https://w3bits.com/css-grid-masonry/
const FeedContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat( auto-fill, minmax( 200px, 1fr ) );

  @media (min-width: 0px) and (max-width: 755px) {
    max-width: 504px;
    column-count: 2;
  }

  @media (min-width: 756px) and (max-width: 1007px) {
    max-width: 756px;
    column-count: 3;
  }

  @media (min-width: 1008px) and (max-width: 1259px) {
    max-width: 1008px;
    column-count: 4;
  }

  @media (min-width: 1260px) and (max-width: 1511px) {
    max-width: 1260px;
    column-count: 5;
  }

  @media (min-width: 1512px) and (max-width: 1763px) {
    width: 1512px;
    column-count: 6;
  }

  @media (min-width: 1764px) and (max-width: 2015px) {
    width: 1764px;
    column-count: 7;
  }

  @media (min-width: 2016px) {
    width: 2016px;
    column-count: 8;
  }
`

const Feed = ({ feedUnits }) => {

  return (
    <FeedWrapper>
      <FeedContainer>
        {feedUnits.map(feedUnit => <FeedUnit key={feedUnit.id} url={feedUnit.urls.thumb} />)}
      </FeedContainer>
    </FeedWrapper>
  )
}

export default Feed