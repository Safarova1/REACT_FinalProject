import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStaffContext } from "./StaffContext";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";

import staffImg from "../../assets/icons/Staff.png";

const AddStaffList = () => {
  const navigate = useNavigate();
  const { addStaff } = useStaffContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber1: "",
    phoneNumber2: "",
    gender: "",
    role: "",
    designation: "",
    staffId: "",
    officialEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newStaff = {
      id: Date.now(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: formData.gender,
      staffId: formData.staffId,
      phoneNumber: formData.phoneNumber1,
      role: formData.role,
      designation: formData.designation,
    };

    addStaff(newStaff);
    navigate("/staff");
  };

  const handleBack = () => {
    navigate("/staff");
  };
  return (
    <>
      <div className="flex items-center justify-center max-w-[1440px] mx-auto ">
        <div className="flex">
          {/* Левая панель */}
          <div className="w-[260px]">
            <Sidebar />
          </div>

          {/* Правая панель */}
          <div className="flex-1 bg-[#F8F9FD] flex flex-col">
            {/* Навбар */}
            <div className="flex justify-between items-center py-[26px] px-4">
              <Navbar
                image={staffImg}
                username="All Staff"
                date="View, search for and add new staff"
              />
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative">
              <div className="w-[1112px] mx-auto mt-8">
                <div className="container mx-auto p-6 bg-white mt-20">
                  {/* Кнопка Back */}
                  <div className="flex justify-start">
                    <button onClick={handleBack} className="text-blue-500">
                      {"< Back"}
                    </button>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                    <h2 className="text-2xl font-semibold mb-6">
                      Add a New Staff
                    </h2>
                    <form onSubmit={handleSubmit} id="staffForm">
                      <div className="grid grid-cols-3 gap-6 pt-7">
                        <div className="col-span-1 flex flex-col items-center border border-gray-300 p-4 rounded-lg min-h-80">
                          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4 mt-12">
                            <span className="text-gray-500">Upload photo</span>
                          </div>
                          <p className="text-gray-500 text-center mb-4">
                            Allowed format
                            <br />
                            JPG, JPEG, and PNG
                            <br />
                            Max file size
                            <br />
                            2MB
                          </p>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <label
                              htmlFor="firstName"
                              className="text-gray-700 mb-1"
                            >
                              First Name
                            </label>
                            <input
                              id="firstName"
                              type="text"
                              placeholder="Enter first name"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="lastName"
                              className="text-gray-700 mb-1"
                            >
                              Last Name
                            </label>
                            <input
                              id="lastName"
                              type="text"
                              placeholder="Enter last name"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="email"
                              className="text-gray-700 mb-1"
                            >
                              Email Address
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter email address"
                              value={formData.email}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="phoneNumber1"
                              className="text-gray-700 mb-1"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phoneNumber1"
                              type="tel"
                              placeholder="Enter phone number"
                              value={formData.phoneNumber1}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="gender"
                              className="text-gray-700 mb-1"
                            >
                              Gender
                            </label>
                            <select
                              id="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md text-gray-400"
                            >
                              <option value="">Select gender</option>
                              <option value="Female">Female</option>
                              <option value="Male">Male</option>
                            </select>
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="phoneNumber2"
                              className="text-gray-700 mb-1"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phoneNumber2"
                              type="tel"
                              placeholder="Enter phone number"
                              value={formData.phoneNumber2}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="role"
                              className="text-gray-700 mb-1"
                            >
                              Role
                            </label>
                            <select
                              id="role"
                              value={formData.role}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md text-gray-400"
                            >
                              <option value="">Select role</option>
                              <option value="Admin">Admin</option>
                              <option value="I.T">I.T</option>
                              <option value="None">None</option>
                              <option value="P.M">P.M</option>
                            </select>
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="designation"
                              className="text-gray-700 mb-1"
                            >
                              Designation
                            </label>
                            <select
                              id="designation"
                              value={formData.designation}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md text-gray-400"
                            >
                              <option value="">Select designation</option>
                              <option value="Human Resources">
                                Human Resources
                              </option>
                              <option value="Operations">Operations</option>
                              <option value="Customer Service">
                                Customer Service
                              </option>
                              <option value="Cleaning">Cleaning</option>
                              <option value="Security">Security</option>
                            </select>
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="staffId"
                              className="text-gray-700 mb-1"
                            >
                              Staff ID
                            </label>
                            <input
                              id="staffId"
                              type="text"
                              placeholder="Staff ID"
                              value={formData.staffId}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md text-black bg-gray-200"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor="officialEmail"
                              className="text-gray-700 mb-1"
                            >
                              Official Email
                            </label>
                            <input
                              id="officialEmail"
                              type="email"
                              placeholder="Enter official email"
                              value={formData.officialEmail}
                              onChange={handleChange}
                              className="p-2 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-blue-500 text-white rounded-md"
                        >
                          Add Staff
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="text-[#383838] absolute bottom-3 left-[30%]">
                Copyright © 2022 Relia Energy. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStaffList;
