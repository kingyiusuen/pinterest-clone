import React from 'react'
import styled from 'styled-components'
import Gallery from 'react-photo-gallery'
import FeedUnit from './FeedUnit'

const FeedWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 0px;
`

const Feed = ({ feedUnits }) => {

  const columns = containerWidth => {
    let columns = 9
    if (containerWidth <= 500) columns = 2
    else if (containerWidth <= 700) columns = 3
    else if (containerWidth <= 900) columns = 4
    else if (containerWidth <= 1100) columns = 5
    else if (containerWidth <= 1300) columns = 6
    else if (containerWidth <= 1500) columns = 7
    else if (containerWidth <= 1700) columns = 8
    return columns
  }

  const format = feedUnits => {
    return feedUnits.map(image => ({
      key: image.id,
      src: image.urls.thumb,
      //zoom: image.urls.small,
      width: 200,
      height: image.height / (image.width / 200)
    }))
  }

  const imageRenderer = ({key, direction, ...props }) => {
    return <FeedUnit key={key} {...props} />
  }

  return (
    <FeedWrapper>
      {
        feedUnits !== null &&
        <Gallery
          photos={format(feedUnits)}
          direction={'column'}
          columns={columns}
          margin={6}
          renderImage={imageRenderer}
        />
      }
    </FeedWrapper>
  )
}

export default Feed