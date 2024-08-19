import { NavLink } from "react-router-dom";
import BarChart from "./BarChart";
import InfoCards from "./InfoCards";


import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import payroll from "../../assets/icons/Payroll.png";

const Payroll = () => {
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
                <ul className="flex space-x-4 my-4 text-slate-400">
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
                  <h2 className="text-2xl font-bold">Payroll</h2>

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

export default Payroll;














