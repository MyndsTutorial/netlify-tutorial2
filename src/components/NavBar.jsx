import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
function Navbar() {
  return (
    <nav id="navbar">
      <div id="left-links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/animes">Animes</Link>
        </div>
        <div>
          <Link to="/favorito">Favorito</Link>
        </div>
        <div>
          <Link to="/notes">Anotações</Link>
        </div>
      </div>
      <div id="right-links">
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
