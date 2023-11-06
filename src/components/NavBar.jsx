import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/animes">Animes</Link>
      </div>
      <div>
        <Link to="/favorito">Favorito</Link>
      </div>
    </nav>
  );
}

export default Navbar;
