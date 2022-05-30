import { NavLink } from "react-router-dom";

import { menuItems } from "./menuItems";

import "./NavMenu.css";

const getActiveLink = ({ isActive }) => {
  return isActive ? "navListItem active" : "navListItem";
};

const NavMenu = () => {
  const elements = menuItems.map(({ title, to, id }) => (
    <li key={id}>
      <NavLink className={getActiveLink} to={to}>
        {title}
      </NavLink>
    </li>
  ));
  return (
    <header>
      <ul className="navList">{elements}</ul>
    </header>
  );
};

export default NavMenu;
