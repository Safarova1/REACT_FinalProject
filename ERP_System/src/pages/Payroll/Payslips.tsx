import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/stores";
import { Payslip } from "../../redux/slices/payslipsSlice";
import InfoCards from "./InfoCards";
import BarChart from "./BarChart";

const Payslips = () => {
  const dispatch = useDispatch();
  const payslips = useSelector((state: RootState) => state.payslips.payslips);
  const navigate = useNavigate();
  return (
    <div className="max-w-[1440px] mx-auto p-8">
      <div className="flex justify-between mb-4">
        <InfoCards />
        <BarChart />
      </div>

      <ul className="flex space-x-4 my-4 text-slate-500">
        <li>
          <NavLink
            to="/"
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
  );
};

export default Payslips;
