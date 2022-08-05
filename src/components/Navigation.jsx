import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-secondary fixed-top navbarBoxShadow">
        <div className="container">
          <NavLink className="navbar-brand underline" to="/">
            CV: Felix Hietaranta
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link underline" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link underline" to="/Skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link underline" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
/*
fixed-top is causing to make the navbar stay when scrolling down

navbar-dark bg-secondary

navbar-dark bg-dark
style="background-color: blue"

*/

/*

add this list item below contact to add blog to the navbar

<li className="nav-item">
  <NavLink className="nav-link" to="/blog">
    Blog
  </NavLink>
</li>

*/
