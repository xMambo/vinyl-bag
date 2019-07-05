import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <a className="nav-link" href="/additem">
      Add Item
      </a>
    </nav>
  );
}

export default Nav;
