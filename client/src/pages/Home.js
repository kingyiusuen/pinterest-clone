import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../components/NavBar/NavBar'
import PinGrid from '../components/PinGrid/PinGrid'
import { getSavedPins, getRandomPins } from '../actions/pin'

const Home = () => {
  const dispatch = useDispatch()
  const session = useSelector(state => state.session)
  useEffect(() => {
    dispatch(getSavedPins(session.user.id))
    dispatch(getRandomPins())
  }, [dispatch, session.user.id])

  const photoUrls = useSelector(state => state.pin.display)
  const savedPins = useSelector(state => state.pin.saved)

  return (
    <div>
      <NavBar />
      <PinGrid photoUrls={photoUrls} savedPins={savedPins} />
    </div>
  )
}

export default Home