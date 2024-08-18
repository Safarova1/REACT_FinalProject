import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useStaffContext } from "./StaffContext";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import staffImg from "../../assets/icons/Staff.png"

interface Staff {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  staffId: string;
  phoneNumber: string;
  role: string;
  designation: string;
}

const StaffList = () => {
  const { staff } = useStaffContext();
  const [filteredData, setFilteredData] = useState<Staff[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewMore = (id: number) => {
    navigate(`/staff/edit-staff/${id}`);
  };

  useEffect(() => {
    console.log("Staff data:", staff);
    if (Array.isArray(staff)) {
      setFilteredData(staff);
      setIsLoading(false);
    } else {
      console.error("Staff is not an array");
      setFilteredData([]);
      setIsLoading(true);
    }
  }, [staff]);

  useEffect(() => {
    console.log("Search term:", searchTerm);
    if (staff) {
      setFilteredData(
        staff.filter((staffMember) =>
          staffMember.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setCurrentPage(1);
    }
  }, [searchTerm, staff]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    console.log("Changing page to:", page);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="flex items-center justify-center max-w-[1440px] mx-auto">
        <div className="flex">
          {/* Левая панель */}
          <div className="w-[260px]">
            <Sidebar />
          </div>

          {/* Правая панель */}
          <div className="flex-1 bg-[#F8F9FD] flex flex-col">
            {/* Навбар */}
            <div className="flex justify-between items-center py-[26px] px-4">
              <Navbar image={staffImg} username="All Staff" date="View, search for and add new staff" />

            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative">
              <div className="w-[1112px] mx-auto mt-8">
                <div className="mx-auto container p-6 bg-white ">
                  {location.pathname === "/staff" && (
                    <div className="bg-white p-6 mb-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col space-y-2">
                          <p className="text-gray-600">Quick search a staff</p>
                          <input
                            type="text"
                            placeholder="Enter search word"
                            className="py-2 border border-gray-300 rounded-md px-4 text-left"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-3xl font-bold">
                            {filteredData.length}
                          </div>
                          <div>Total number of staff</div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <p className="text-gray-600">Filter staff</p>
                          <select className="p-2 border border-gray-300 rounded-md">
                            <option>All staff</option>
                          </select>
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:bg-blue-800 hover:text-gray-300">
                          <Link to="add-staff">Add New Staff</Link>
                        </button>
                      </div>
                    </div>
                  )}

                  {location.pathname === "/staff" && (
                    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">All Staff</h2>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Showing</span>
                          <select
                            className="p-2 border border-gray-300 rounded-md"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                          >
                            <option value={5}>5 per page</option>
                            <option value={10}>10 per page</option>
                            <option value={15}>15 per page</option>
                          </select>
                        </div>
                      </div>

                      <table className="min-w-full bg-white rounded-md overflow-hidden shadow-lg">
                        <thead>
                          <tr>
                            <th className="p-3 text-left">S/N</th>
                            <th className="p-3 text-left">First Name</th>
                            <th className="p-3 text-left">Last Name</th>
                            <th className="p-3 text-left">Gender</th>
                            <th className="p-3 text-left">Staff ID</th>
                            <th className="p-3 text-left">Phone Number</th>
                            <th className="p-3 text-left">Role</th>
                            <th className="p-3 text-left">Designation</th>
                            <th className="p-3 text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentItems.map((staff, index) => (
                            <tr key={staff.id} className="border-t">
                              <td className="p-3">
                                {index + 1 + (currentPage - 1) * itemsPerPage}
                              </td>
                              <td className="p-3">{staff.firstName}</td>
                              <td className="p-3">{staff.lastName}</td>
                              <td className="p-3">{staff.gender}</td>
                              <td className="p-3">{staff.staffId}</td>
                              <td className="p-3">{staff.phoneNumber}</td>
                              <td className="p-3">{staff.role}</td>
                              <td className="p-3">{staff.designation}</td>
                              <td
                                onClick={() => handleViewMore(staff.id)}
                                className="p-3 text-blue-500 cursor-pointer hover:underline hover:text-blue-600 transition duration-300 ease-out hover:ease-in"
                              >
                                View more
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="flex justify-center items-center mt-6 space-x-2">
                        {getPageNumbers().map((number) => (
                          <button
                            key={number}
                            className={`p-2 border rounded-md ${currentPage === number
                              ? "bg-blue-600 text-white"
                              : "border-gray-300"
                              }`}
                            onClick={() => handlePageChange(number)}
                          >
                            {number}
                          </button>
                        ))}
                        {totalPages > 1 && (
                          <button
                            className="p-2 border border-gray-300 rounded-md"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(totalPages)}
                          >
                            {">>"}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                  <Outlet />
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

export default StaffList;
