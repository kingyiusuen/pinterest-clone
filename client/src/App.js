import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RequireAuth, NotRequireAuth } from './routes/routes'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <NotRequireAuth>
              <Login />
            </NotRequireAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <NotRequireAuth>
              <Signup />
            </NotRequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App