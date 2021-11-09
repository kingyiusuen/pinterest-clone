import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Feed from '../components/Feed/Feed'
import { random } from '../services/unsplash'

const Home = () => {
  const [feedUnits, setFeedUnits] = useState(null)

  const getRandomImages = async () => {
    try {
      const data = await random({ count: 30 })
      setFeedUnits(data)
    } catch (exception) {
      console.log(exception)
    }
  }

  useEffect(() => getRandomImages(), [])

  return (
    <div>
      <NavBar setFeedUnits={setFeedUnits} />
      <Feed feedUnits={feedUnits} />
    </div>
  )
}

export default Home