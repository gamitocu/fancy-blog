import React from'react';
import { Link } from'react-router-dom';

const Menu = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top mb-4">
    <ul className="navbar-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/posts">Posts</Link>
    </ul>
  </nav>
)

export default Menu;