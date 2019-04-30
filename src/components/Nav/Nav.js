import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-dark bg-dark">
    <h2 style={{color:"white"}}>Clicky Game</h2>

    <span className="navbar-text">Click all images ONLY ONCE to win!!</span>
    <ul className="nav text-white nav-fills">
      <li className="nav-item">
        <span className="nav-link" href="#!">Score {props.score} &nbsp;&nbsp;&nbsp;&nbsp; Top Score {props.highScore}</span>
      </li>
    </ul>
  </nav>
)

export default Nav;