import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTax } from "../../redux/slices/taxSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Navbar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import staffImg from "../../assets/icons/Staff.png";

const CreateTaxDefinition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "",
    value: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taxData = {
      type: formData.type,
      value: parseFloat(formData.value),
      id: Date.now(),
    };
    try {
      await dispatch(addTax(taxData) as any);
      navigate("/tax");
    } catch (error) {
      console.error("Failed to add tax:", error);
    }
  };

  return (
    <>
      <div className="w-[1148px] mx-auto mt-20">
        <div className="flex">
          <div className="w-[260px] ">
            <Sidebar />
          </div>

          <div className="flex-1 bg-[#F8F9FD] flex flex-col  ">
            <div className="flex justify-between items-center  py-[26px] px-4  ">
              <Navbar
                image={staffImg}
                username="Payment Voucher"
                date="Create payment voucher"
              />
            </div>

            <div className="flex justify-start">
              <button
                onClick={() => navigate(-1)}
                className="text-blue-500 hover:text-blue-700 mb-[30px] "
              >
                <span className="mr-1">&#8592;</span>Back
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-[60px]">
              Create Tax Definition
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 p-4">
              <div className="flex flex-col w-[350px]">
                <input
                  type="text"
                  name="type"
                  placeholder="Tax Type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="border p-2 rounded w-full border-slate-400"
                />
              </div>
              <div className="flex flex-col w-[350px]">
                <input
                  type="number"
                  name="value"
                  placeholder="Value"
                  value={formData.value}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  className="border p-2 rounded w-full border-slate-400"
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
        </div>
      </div>
    </>
  );
};

export default CreateTaxDefinition;
