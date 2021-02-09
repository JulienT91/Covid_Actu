import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="nav-active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/a-propos" activeClassName="nav-active">
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
