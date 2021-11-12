import React from 'react'
import './ProfileHeader.css'

const ProfileHeader = ({ user }) => {
  return (
    <div class='header__container'>
      <div class='avatar__wrapper'>
        <div class='avatar'>
          {user.name.charAt(0).toUpperCase()}
        </div>
      </div>
      <h1>{user.name}</h1>
      <span class='username'>@{user.username}</span>
    </div>
  )
}

export default ProfileHeader
