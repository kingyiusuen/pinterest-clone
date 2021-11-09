import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

const App = () => {
  //const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </div>
  )
}

export default App