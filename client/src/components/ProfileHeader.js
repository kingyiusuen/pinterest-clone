import React from "react";

import "./ProfileHeader.css";

const ProfileHeader = ({ user }) => {
  return (
    <div className="header__container">
      <div className="avatar__wrapper">
        <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
      </div>
      <h1>{user.name}</h1>
      <span className="username">@{user.username}</span>
    </div>
  );
};

export default ProfileHeader;
