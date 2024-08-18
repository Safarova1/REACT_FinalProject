import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 13px 5px;
  background-color: white;
  color: black;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F2F7FF;
  }

  &:hover .text {
    background: linear-gradient(to right, #1e3a8a, #ec4899);
    background-clip: text;
    color: transparent;
  }
`;


interface NavItemProps {
  to: string;
  label: string;
  icon: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon }) => (
  <NavLink to={to}>
    <ListItem>
      <img src={icon} alt={label} className="w-6" />
      <span className="text ">{label}</span>
    </ListItem>
  </NavLink>
);




export default NavItem;