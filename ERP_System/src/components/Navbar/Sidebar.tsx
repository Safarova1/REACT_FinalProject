import { Outlet } from "react-router-dom";

import logo from "../Navbar/images_icons/Logo.png";

import Staff from "../Navbar/images_icons/Staff.png";
import Stock from "../Navbar/images_icons/Stock.png";
import Procurement from "../Navbar/images_icons/Procurement.png";
import Payroll from "../Navbar/images_icons/Payroll.png";
import Payment from "../Navbar/images_icons/Payment.png";
import Notifications from "../Navbar/images_icons/ring.png";
import Memo from "../Navbar/images_icons/Procurement.png";
import Maintenance from "../Navbar/images_icons/Maintenance.png";
import Logistics from "../Navbar/images_icons/Logistics.png";
import Dashboard from "../Navbar/images_icons/Dashboard.png";
import Capacity from "../Navbar/images_icons/Capacity.png";
import Budget from "../Navbar/images_icons/Budget.png";
import Circulars from "../Navbar/images_icons/Circulars.png";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <>
      <nav className={`flex flex-col  bg-white `}>
        {/* Логотип  */}
        <div className="flex justify-between mt-14 	 mx-auto">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        {/* Меню */}
        <ul className="flex flex-col space-y-2 mt-10 gap-0.5	">
          <NavItem to="/dashboard" label="Dashboard" icon={Dashboard} />
          <NavItem to="/staff" label="Staff" icon={Staff} />
          <NavItem to="/stock" label="Stock" icon={Stock} />
          <NavItem to="/procurement" label="Procurement" icon={Procurement} />
          <NavItem to="/payroll" label="Payroll" icon={Payroll} />
          <NavItem to="/payment" label="Payment" icon={Payment} />
          <NavItem
            to="/notifications"
            label="Notifications"
            icon={Notifications}
          />
          <NavItem to="/memo" label="Memo" icon={Memo} />
          <NavItem to="/maintenance" label="Maintenance" icon={Maintenance} />
          <NavItem to="/logistics" label="Logistics" icon={Logistics} />
          <NavItem to="/capacity" label="Capacity" icon={Capacity} />
          <NavItem to="/budget" label="Budget" icon={Budget} />
          <NavItem to="/circular" label="Circulars" icon={Circulars} />

          {/* 
          <NavLink
            to="/staff"
            className={({ isActive }) =>
              isActive ? "hover:bg-[#F2F7FF]" : "bg-[#ffffff]"
            }
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 bg-[#000] hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
              <img src={Staff} alt="Staff" className="w-6" />
              Staff
            </li>
          </NavLink> 

          <NavLink
            to="/payment-voucher"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Payment} alt="Payment" className="w-6" />
              Payment Voucher
            </li>
          </NavLink>

          <NavLink
            to="/payroll"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Payroll} alt="Payroll" className="w-6" />
              Payroll
            </li>
          </NavLink>

          <NavLink
            to="/memo"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Memo} alt="Memo" className="w-6" />
              Memo
            </li>
          </NavLink>

          <NavLink
            to="/circulars"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Circulars} alt="Circulars" className="w-6" />
              Circulars
            </li>
          </NavLink>

          <NavLink
            to="/maintenance"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Maintenance} alt="Maintenance" className="w-6" />
              Maintenance
            </li>
          </NavLink>

          <NavLink
            to="/logistics"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Logistics} alt="Logistics" className="w-6" />
              Logistics
            </li>
          </NavLink>

          <NavLink
            to="/office-budget"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Budget} alt="Budget" className="w-6" />
              Office Budget
            </li>
          </NavLink>

          <NavLink
            to="/stocks-and-inventory"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Stock} alt="Stock" className="w-6" />
              Stocks and Inventory
            </li>
          </NavLink>

          <NavLink
            to="/notifications"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Notifications} alt="Notifications" className="w-6" />
              Notifications
            </li>
          </NavLink>

          <NavLink
            to="/capacity-building"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Capacity} alt="Capacity" className="w-6" />
              Capacity Building
            </li>
          </NavLink>

          <NavLink
            to="/procurements"
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 hover:bg-[#F2F7FF] hover:text-blue-600 ">
              <img src={Procurement} alt="Procurement" className="w-6" />
              Procurements
            </li>
          </NavLink> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Sidebar;
