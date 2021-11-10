import React, { useState } from 'react'
import styled from 'styled-components'
import FeedImage from './FeedImage'
import FeedDialog from './FeedDialog'

const FeedUnitWrapper = styled.div``

const FeedUnit = ({ image }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)
  return (
    <FeedUnitWrapper>
      <FeedImage image={image} handleOpenDialog={handleOpenDialog} />
      <FeedDialog
        image={image}
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </FeedUnitWrapper>
  )
}

export default FeedUnit
