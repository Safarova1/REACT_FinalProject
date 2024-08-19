import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSalaries } from "../../redux/slices/salarySlice";
import { RootState } from "../../redux/store";
import { NavLink, useNavigate } from "react-router-dom";
import BarChart from "./BarChart";
import InfoCards from "./InfoCards";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import payroll from "../../assets/icons/Payroll.png";

const SalaryBreakdown = () => {

  const dispatch = useDispatch();
  const salaries = useSelector((state: RootState) => state.salary.salaries);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSalaries() as any);
  }, [dispatch]);


  return (
    <>
      <div className="flex items-center justify-center max-w-[1440px] mx-auto ">
        <div className=" flex  ">
          {/* Левая панель */}
          <div className="w-[260px] ">
            <Sidebar />
          </div>

          {/* Правая панель */}
          <div className="flex-1 bg-[#F8F9FD] flex flex-col  ">
            {/* Навбар */}
            <div className="flex-1 justify-between items-center  py-[26px] px-4  ">

              <Navbar image={payroll} username="Payroll" date="Generate and send payroll to account." />
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative ">
              <div className="w-[1112px]  mx-auto mt-8 ">
                <div className="flex justify-between">
                  <InfoCards />
                  <BarChart />
                </div>

                <ul className="flex space-x-4 my-4 text-slate-500">
                  <li>
                    <NavLink to="/salary-breakdown">Salary Breakdown</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tax">Tax Definitions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/payslips">Payslips</NavLink>
                  </li>
                  <li>
                    <NavLink to="/payroll">Payroll</NavLink>
                  </li>
                </ul>

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Salary Definition</h2>
                  <button
                    onClick={() => navigate("/create-salary")}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                  >
                    Create Salary Definition
                  </button>
                </div>

                {salaries.length > 0 ? (
                  <div className="overflow-y-auto max-h-[600px] border border-gray-300 rounded-lg shadow-lg">
                    <ul>
                      <li className="flex bg-gray-100 font-bold py-2 px-4 border-b">
                        <span className="w-12">S/N</span>
                        <span className="w-1/6">Title</span>
                        <span className="w-1/6">Level</span>
                        <span className="w-1/6">Basic Salary</span>
                        <span className="w-1/6">Allowance</span>
                        <span className="w-1/6">Gross Salary</span>
                        <span className="w-1/6">Deductions</span>
                        <span className="w-1/6">Net Salary</span>
                        <span className="w-1/6 text-right">Action</span>
                      </li>
                      {salaries.map((salary, index) => (
                        <li
                          key={index}
                          className="flex py-2 px-4 border-b items-center"
                        >
                          <span className="w-12">{index + 1}</span>
                          <span className="w-1/6">{salary.title}</span>
                          <span className="w-1/6">{salary.level}</span>
                          <span className="w-1/6">{salary.basicSalary}</span>
                          <span className="w-1/6">{salary.allowance}</span>
                          <span className="w-1/6">{salary.grossSalary}</span>
                          <span className="w-1/6">{salary.deductions}</span>
                          <span className="w-1/6">{salary.netSalary}</span>
                          <span className="w-1/6 text-right">
                            <button
                              onClick={() =>
                                navigate(`/edit-salary/${salary.id}`)
                              }
                              className="text-blue-500 mr-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                navigate(`/delete-salary/${salary.id}`)
                              }
                              className="text-red-500"
                            >
                              Delete
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>No salaries available</p>
                )}
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

export default SalaryBreakdown;





