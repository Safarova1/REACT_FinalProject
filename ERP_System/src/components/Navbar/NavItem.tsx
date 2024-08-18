// NavItem.js

import { NavLink } from "react-router-dom";
import ListItem from "../Navbar/style"; // Импортируйте стили

const NavItem = ({ to, label, icon }) => (
  <NavLink to={to}>
    <ListItem>
      <img src={icon} alt={label} className="w-6" />
      <span className="text">{label}</span>
    </ListItem>
  </NavLink>
);

export default NavItem;
