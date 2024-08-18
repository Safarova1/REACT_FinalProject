import React, { useState } from 'react';
import shape from "../Navbar/images_icons/shape.png";


const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Иконка для открытия меню */}
      <img src={shape} alt="shape"  />
      <button onClick={toggleMenu} className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6h18M3 12h18m-9 6h9"
          />
        </svg>
      </button>

      {/* Меню */}
      {isOpen && (
        <div className="absolute right-0 top-10 w-48 h-48 bg-white shadow-lg rounded-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li className="hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
