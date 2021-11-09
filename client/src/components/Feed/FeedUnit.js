import React, { useState } from 'react'
import styled from 'styled-components'
import FeedImage from './FeedImage'
import FeedDialog from './FeedDialog'

const FeedUnitWrapper = styled.div``

const FeedUnit = ({ photo, top, left, margin }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)

  return (
    <FeedUnitWrapper>
      <FeedImage
        photo={photo}
        top={top}
        left={left}
        margin={margin}
        handleOpenDialog={handleOpenDialog}
      />
      <FeedDialog
        photo={photo}
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </FeedUnitWrapper>
  )
}

export default FeedUnit
