import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { Payslip } from "../../redux/slices/payslipsSlice";
import InfoCards from "./InfoCards";
import BarChart from "./BarChart";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import payroll from "../../assets/icons/Payroll.png";


const Payslips = () => {

  const dispatch = useDispatch();
  const payslips = useSelector((state: RootState) => state.payslips.payslips);
  const navigate = useNavigate();


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
                <div className="flex justify-between mb-4">
                  <InfoCards />
                  <BarChart />
                </div>

                <ul className="flex space-x-4 my-4 text-slate-500">
                  <li>
                    <NavLink
                      to="/salary-breakdown"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500" : "text-slate-500"
                      }
                    >
                      Salary Breakdown
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tax"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500" : "text-slate-500"
                      }
                    >
                      Tax Definitions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/payslips"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500" : "text-slate-500"
                      }
                    >
                      Payslips
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/payroll"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500" : "text-slate-500"
                      }
                    >
                      Payroll
                    </NavLink>
                  </li>
                </ul>

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Payslips</h2>
                  <button
                    onClick={() => navigate("/create-payslip")}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                  >
                    Create Payslip
                  </button>
                </div>

                {payslips.length > 0 ? (
                  <ul className="border border-gray-300 rounded-lg shadow-lg">
                    <li className="flex bg-gray-100 font-bold py-2 px-4 border-b">
                      <div className="flex flex-shrink-0 w-[80px]">S/N</div>
                      <div className="flex flex-shrink-0 w-[150px]">Title</div>
                      <div className="flex flex-shrink-0 w-[150px]">Level</div>
                      <div className="flex-grow text-center">Basic Salary</div>
                      <div className="flex-grow text-center">Allowance</div>
                      <div className="flex-grow text-center">Gross Salary</div>
                      <div className="flex-grow text-center">Deductions</div>
                      <div className="flex-grow text-center">Net Salary</div>
                    </li>
                    {payslips.map((payslip: Payslip, index: number) => (
                      <li
                        key={payslip.id}
                        className="flex py-2 px-4 border-b items-center"
                      >
                        <div className="flex flex-shrink-0 w-[80px]">{index + 1}</div>
                        <div className="flex flex-shrink-0 w-[150px]">
                          {payslip.title}
                        </div>
                        <div className="flex flex-shrink-0 w-[150px]">
                          {payslip.level}
                        </div>
                        <div className="flex-grow text-center">{payslip.basicSalary}</div>
                        <div className="flex-grow text-center">{payslip.allowance}</div>
                        <div className="flex-grow text-center">{payslip.grossSalary}</div>
                        <div className="flex-grow text-center">{payslip.deductions}</div>
                        <div className="flex-grow text-center">{payslip.netSalary}</div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No payslips available</p>
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

export default Payslips;














