import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTaxes, deleteTax } from "../../redux/slices/taxSlice";
import { RootState } from "../../redux/store";
import { NavLink, useNavigate } from "react-router-dom";
import BarChart from "./BarChart";
import InfoCards from "./InfoCards";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import payroll from "../../assets/icons/Payroll.png";

const Tax = () => {
  const dispatch = useDispatch();
  const taxes = useSelector((state: RootState) => state.tax.taxes);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTaxes() as any);
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
            <div className="flex justify-between items-center  py-[26px] px-4  ">
              <Navbar
                image={payroll}
                username="Payroll"
                date="Generate and send payroll to account."
              />
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
                  <h2 className="text-2xl font-bold">Tax Definitions</h2>
                  <button
                    onClick={() => navigate("/create-tax")}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                  >
                    Create Tax Definition
                  </button>
                </div>

                {taxes.length > 0 ? (
                  <ul className="border border-gray-300 rounded-lg shadow-lg">
                    <li className="flex bg-gray-100 font-bold py-2 px-4 border-b">
                      <div className="flex flex-shrink-0 w-[80px]">S/N</div>
                      <div className="flex flex-shrink-0 w-[150px]">Tax</div>
                      <div className="flex-grow text-center">Value</div>
                      <div className="flex-shrink-0 w-[150px] text-right">
                        Action
                      </div>
                    </li>
                    {taxes.map((tax, index) => (
                      <li
                        key={index}
                        className="flex py-2 px-4 border-b items-center"
                      >
                        <div className="flex flex-shrink-0 w-[80px]">
                          {index + 1}
                        </div>
                        <div className="flex flex-shrink-0 w-[150px]">
                          {tax.type}
                        </div>
                        <div className="flex-grow text-center">
                          {tax.value}%
                        </div>
                        <div className="flex-shrink-0 w-[150px] text-right">
                          <button
                            onClick={() => dispatch(deleteTax(tax.id) as any)}
                            className="text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No tax definitions available</p>
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

export default Tax;
