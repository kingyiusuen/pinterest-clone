import React from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import PinterestIcon from '@mui/icons-material/Pinterest'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import './NavBar.css'
import { searchPins } from '../actions/pin'
import { logout } from '../actions/session'

const NavBar = ({ isHome }) => {
  const dispatch = useDispatch()

  const handleSearch = event => {
    event.preventDefault()
    dispatch(searchPins(event.target.query.value))
  }

  const handleLogout = () => dispatch(logout())

  return (
    <div className='nav-bar'>
      <div className='nav-bar__icon nav-bar__icon--red'>
        <Link to='/'><PinterestIcon /></Link>
      </div>
      <button className={`nav-bar__btn ${isHome ? 'nav-bar__btn--active' : 'nav-bar__btn--inactive'}`}>
        <Link to='/'>Home</Link>
      </button>
      <div className='nav-bar__search-box'>
        <SearchIcon />
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Search'
            name='query'
          />
          <button type='submit'></button>
        </form>
      </div>
      <div className='nav-bar__icon-group'>
        <div className='nav-bar__icon nav-bar__icon--gray'>
          <Link to='/profile'>
            <AccountCircleIcon />
          </Link>
        </div>
        <div className='nav-bar__icon nav-bar__icon--gray' onClick={handleLogout}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  )
}

export default NavBar