import { NavLink, Outlet } from "react-router-dom";

import logo from "../Navbar/images_icons/Logo.png";

import Staff from "../Navbar/images_icons/Staff.png";
import Stock from "../Navbar/images_icons/Stock.png";
import Procurement from "../Navbar/images_icons/Procurement.png";
import Payroll from "../Navbar/images_icons/Payroll.png";
import Payment from "../Navbar/images_icons/Payment.png";
import Notifications from "../Navbar/images_icons/Notifications.png";
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

          {/* <NavLink to="/dashboard">
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 bg-white hover:bg-red-500 transition-all duration-300">
              <img src={Dashboard} alt="Dashboard" className="w-6" />
              <span className="text-black bg-clip-text transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-500 hover:text-transparent">
                Dashboard
              </span>
            </li>
          </NavLink>

          <NavLink to="/staff">
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 bg-white hover:bg-red-500 transition-all duration-300">
              <img src={Staff} alt="Staff" className="w-6" />
              <span className="text-black bg-clip-text transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-500 hover:text-transparent">
                Staff
              </span>
            </li>
          </NavLink> */}

          {/* <NavLink to="/dashboard">
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 bg-white hover:bg-red-500 text-black transition-all duration-300">
              <img src={Dashboard} alt="Dashboard" className="w-6" />
              <span className="bg-none hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                Dashboard
              </span>
            </li>
          </NavLink>

          <NavLink to="/staff">
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5 bg-white hover:bg-red-500 text-black transition-all duration-300">
              <img src={Staff} alt="Staff" className="w-6" />
              <span className="bg-none hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                Staff
              </span>
            </li>
          </NavLink> */}

          {/* <NavLink to="/dashboard">
            <li className="relative flex flex-row gap-1 py-3.5 pl-5 ml-2.5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:text-black">
              <span className="absolute inset-0 bg-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              <img
                src={Dashboard}
                alt="Dashboard"
                className="w-6 relative z-10"
              />
              <span className="relative z-10">Dashboard</span>
            </li>
          </NavLink>

          <NavLink to="/staff">
            <li className="relative flex flex-row gap-1 py-3.5 pl-5 ml-2.5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:text-black">
              <span className="absolute inset-0 bg-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              <img src={Staff} alt="Staff" className="w-6 relative z-10" />
              <span className="relative z-10">Staff</span>
            </li>
          </NavLink> */}

          {/* <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? " hover:bg-[#F2F7FF] " : "bg-[#ffffff]  "
            }
          >
            <li className="flex flex-row gap-1 py-3.5 pl-5 ml-2.5  bg-[#000] hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
              <img src={Dashboard} alt="Dashboard" className="w-6" />
              Dashboard
            </li>
          </NavLink>

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
</NavLink> */}

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
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Sidebar;
