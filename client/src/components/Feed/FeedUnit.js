import React, { useState } from 'react'
import styled from 'styled-components'
import FeedImage from './FeedImage'
import FeedDialog from './FeedDialog'

const FeedUnitWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`

const FeedUnitContainer = styled.div`
  margin: 0 auto;
`

const FeedUnit = ({ image }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)
  return (
    <FeedUnitWrapper>
      <FeedUnitContainer>
        <FeedImage src={`${image.urls.raw}&w=236`} handleOpenDialog={handleOpenDialog} />
        <FeedDialog
          src={`${image.urls.raw}&w=400`}
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </FeedUnitContainer>
    </FeedUnitWrapper>
  )
}

export default FeedUnit
