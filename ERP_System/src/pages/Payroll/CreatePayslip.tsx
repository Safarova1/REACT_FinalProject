import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPayslip } from "../../redux/slices/payslipsSlice";
import { useNavigate } from "react-router-dom";

const CreatePayslip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    staffName: "",
    title: "",
    level: "",
    basicSalary: "",
    allowance: "",
    grossSalary: 0,
    deductions: "",
    netSalary: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      const basicSalary = parseFloat(updatedData.basicSalary) || 0;
      const allowance = parseFloat(updatedData.allowance) || 0;
      const deductions = parseFloat(updatedData.deductions) || 0;
      const grossSalary = basicSalary + allowance;
      const netSalary = grossSalary - deductions;

      return {
        ...updatedData,
        grossSalary: grossSalary,
        netSalary: netSalary,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payslipData = {
      ...formData,
      basicSalary: parseFloat(formData.basicSalary),
      allowance: parseFloat(formData.allowance),
      grossSalary: formData.grossSalary,
      deductions: parseFloat(formData.deductions),
      netSalary: formData.netSalary,
      id: Date.now(),
    };
    try {
      await dispatch(addPayslip(payslipData) as any);
      navigate("/payslips"); 
    } catch (error) {
      console.error("Failed to add payslip:", error);
    }
  };

  return (
    <div className="w-[1148px] mx-auto mt-20">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:text-blue-700 mb-[30px]"
      >
        <span className="mr-1">&#8592;</span>Back
      </button>
      <h2 className="text-2xl font-bold mb-[60px]">Create Payslip</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 p-4">
        <div className="flex flex-col w-[350px]">
          <input
            type="text"
            name="staffName"
            placeholder="Staff Name"
            value={formData.staffName}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="text"
            name="level"
            placeholder="Level"
            value={formData.level}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="basicSalary"
            placeholder="Basic Salary"
            value={formData.basicSalary}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="allowance"
            placeholder="Allowance"
            value={formData.allowance}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="deductions"
            placeholder="Deductions"
            value={formData.deductions}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="grossSalary"
            placeholder="Gross Salary"
            value={formData.grossSalary}
            readOnly
            className="border p-2 rounded w-full border-slate-400 bg-gray-100"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="netSalary"
            placeholder="Net Salary"
            value={formData.netSalary}
            readOnly
            className="border p-2 rounded w-full border-slate-400 bg-gray-100"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 w-full"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePayslip;
