import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./NavBar.css";
import { logout } from "../actions/session";

const NavBar = ({ query }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search/${event.target.query.value}`);
  };

  const handleLogout = () => dispatch(logout());

  return (
    <div className="nav-bar">
      <div className="nav-bar__icon nav-bar__icon--red">
        <Link to="/">
          <PinterestIcon />
        </Link>
      </div>
      <div className="nav-bar__link">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-bar__link--active" : "nav-bar__link--inactive"
          }
        >
          Home
        </NavLink>
      </div>
      <div className="nav-bar__search-box">
        <SearchIcon />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            name="query"
            defaultValue={query || ""}
          />
          <button type="submit"></button>
        </form>
      </div>
      <div className="nav-bar__icon-group">
        <div className="nav-bar__icon nav-bar__icon--gray">
          <Link to="/profile">
            <AccountCircleIcon />
          </Link>
        </div>
        <div
          className="nav-bar__icon nav-bar__icon--gray"
          onClick={handleLogout}
        >
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
