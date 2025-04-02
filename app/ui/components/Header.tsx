import React from "react";
import { Link } from "react-router";

function Header() {
  return <nav className="nav-bar">
  <Link to={'/'} className="logo">
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
  </Link>
 

  </nav>
}

export default Header;
