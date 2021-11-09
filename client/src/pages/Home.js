import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Feed from '../components/Feed/Feed'

const Home = () => {
  const [feedUnits, setFeedUnits] = useState(null)

  return (
    <div>
      <NavBar setFeedUnits={setFeedUnits} />
      <Feed feedUnits={feedUnits} />
    </div>
  )
}

export default Home
