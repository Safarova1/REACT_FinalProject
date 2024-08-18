import { NavLink } from "react-router-dom";
import { ListItem } from "./style";

interface NavItemProps {
  to: string;
  label: string;
  icon: string;
}



const NavItem: React.FC<NavItemProps> = ({ to, label, icon }) => (
  <NavLink to={to}>
    <ListItem>
      <img src={icon} alt={label} className="w-6" />
      <span className="text">{label}</span>
    </ListItem>
  </NavLink>
);




export default NavItem;
