import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores";

const InfoCards: React.FC = () => {
  const salaries = useSelector((state: RootState) => state.salary.salaries);
  const [grossSalary, setGrossSalary] = useState<number>(0);
  const [netSalary, setNetSalary] = useState<number>(0);
  const tax = 550350;
  const loan = 150350;

  useEffect(() => {
    const grossTotal = salaries.reduce(
      (acc, salary) => acc + salary.grossSalary,
      0
    );
    const netTotal = salaries.reduce(
      (acc, salary) => acc + salary.netSalary,
      0
    );

    setGrossSalary(grossTotal);
    setNetSalary(netTotal);
  }, [salaries]);

  return (
    <div className="w-[554px] h-[320px] grid grid-cols-2 gap-[10px]">
      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold">₦{grossSalary.toLocaleString()}</h2>
        <p>Gross salary this month</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold">₦{netSalary.toLocaleString()}</h2>
        <p>Net salary this month</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold">₦{tax.toLocaleString()}</h2>
        <p>Total tax this month</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold">₦{loan.toLocaleString()}</h2>
        <p>Total loan this month</p>
      </div>
    </div>
  );
};

export default InfoCards;
