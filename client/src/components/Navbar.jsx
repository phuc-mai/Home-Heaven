import { IconButton } from "@mui/material";
import { Person, Search, Menu } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../styles/Navbar.scss";
import variables from "../styles/variables.scss";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <div className="navbar">
      <img src="/assets/logo.png" alt="logo" />

      <div className="navbar_search">
        <input placeholder="Search..." />
        <IconButton>
          <Search sx={{ color: variables.pinkred }} />
        </IconButton>
      </div>

      <div className="navbar_right">
        <p>Become A Host</p>

        <button className="navbar_right_account" onClick={() => setDropdownMenu(!dropdownMenu)}>
          <Menu sx={{ color: variables.grey }} />
          <Person sx={{ color: variables.grey }} />
        </button>

        {dropdownMenu && (
        <div className="navbar_right_accountmenu">
          <Link to="/login">
            Log In
          </Link>
          <Link to="/register">
            Sign Up
          </Link>
          <Link to="/become-a-host">
            Become A Host
          </Link>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;
