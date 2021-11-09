import React from 'react'
import styled from 'styled-components'
import FeedUnit from './FeedUnit'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 0px;
`

// https://w3bits.com/css-grid-masonry/
const Container = styled.div`
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

const Feed = () => {
  const pins = [
    { id: 1, url: 'https://i.redd.it/nja9yshzky051.jpg' },
    { id: 2, url: 'https://apps.streamlitusercontent.com/kingyiusuen/clip-image-search/master/streamlit_app.py/+/media/34ab5efd85419f79d4fad7ed5f52505ce08a8ee52e9fc983f329af27.jpeg' },
    { id: 3, url: 'https://apps.streamlitusercontent.com/kingyiusuen/clip-image-search/master/streamlit_app.py/+/media/7621d13b9e04eccfb4255cf51e3d157d2079a7c9d38436836d118aca.jpeg' },
    { id: 4, url: 'https://apps.streamlitusercontent.com/kingyiusuen/clip-image-search/master/streamlit_app.py/+/media/150b25ff9c25b6ad1da5c582b47f0d5d8927b2565dcc3ec418d4d537.jpeg' },
    { id: 5, url: 'https://apps.streamlitusercontent.com/kingyiusuen/clip-image-search/master/streamlit_app.py/+/media/51132d29689709e781a59dd1e6f69f6d37162f7f8f8444004113ad42.jpeg' },
    { id: 6, url: 'https://apps.streamlitusercontent.com/kingyiusuen/clip-image-search/master/streamlit_app.py/+/media/b1f95644c65a1a20763f9a32c73666467015671dcfa9a31e8f59f2ce.jpeg' },
    { id: 7, url: 'https://apps.streamlitusercontent.com/kingyiusuen/clip-image-search/master/streamlit_app.py/+/media/848f3783f281c63a840e021bb278b050812046802119f3a7c7a81188.jpeg' }
  ]
  return (
    <Wrapper>
      <Container>
        {pins.map(pin => <FeedUnit key={pin.id} url={pin.url} />)}
      </Container>
    </Wrapper>
  )
}

export default Feed