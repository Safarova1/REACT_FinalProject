import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSalary } from "../../redux/slices/salarySlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/stores";

const EditSalaryDefinition = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const salary = useSelector((state: RootState) =>
    state.salary.salaries.find((s) => s.id === Number(id))
  );

  const [formData, setFormData] = useState({
    title: salary?.title || "",
    level: salary?.level || "",
    basicSalary: salary?.basicSalary.toString() || "",
    allowance: salary?.allowance.toString() || "",
    deductions: salary?.deductions.toString() || "",
  });

  useEffect(() => {
    if (salary) {
      setFormData({
        title: salary.title,
        level: salary.level,
        basicSalary: salary.basicSalary.toString(),
        allowance: salary.allowance.toString(),
        deductions: salary.deductions.toString(),
      });
    }
  }, [salary]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateSalaries = () => {
    const basicSalary = parseFloat(formData.basicSalary);
    const allowance = parseFloat(formData.allowance);
    const deductions = parseFloat(formData.deductions);
    const grossSalary = basicSalary + allowance;
    const netSalary = grossSalary - deductions;
    return {
      ...formData,
      basicSalary: basicSalary,
      allowance: allowance,
      grossSalary: grossSalary,
      deductions: deductions,
      netSalary: netSalary,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!salary?.id) {
      console.error("Salary ID is missing.");
      return;
    }

    const updatedSalary = {
      ...calculateSalaries(),
      id: salary.id,
    };

    try {
      await dispatch(updateSalary(updatedSalary) as any);
      navigate("/");
    } catch (error) {
      console.error("Failed to update salary:", error);
    }
  };

  return (
    <div className="w-[1148px] mx-auto mt-20">
      {!salary ? (
        <p>Loading...</p>
      ) : (
        <>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:text-blue-700 mb-[30px]"
          >
            <span className="mr-1">&#8592;</span>Back
          </button>
          <h2 className="text-2xl font-bold mb-[60px]">
            Edit Salary Definition
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 p-4">
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
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 w-full"
              >
                Update
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditSalaryDefinition;
