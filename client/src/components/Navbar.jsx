import { IconButton } from "@mui/material";
import { Person, Search, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/Navbar.scss";
import variables from "../styles/variables.scss";
import { setLogout } from "../redux/state";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <a href="/" target="_blank"><img src="/assets/logo.png" alt="logo"/></a>

      <div className="navbar_search">
        <input placeholder="Search..." />
        <IconButton>
          <Search sx={{ color: variables.pinkred }} />
        </IconButton>
      </div>

      <div className="navbar_right">
        <a href="/create-listing">Become A Host</a>

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace('public','')}`}
              alt="Profile"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link>Trip List</Link>
            <Link>Wish List</Link>
            <Link>Property List</Link>
            <Link onClick={() => dispatch(setLogout())}>Log Out</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
