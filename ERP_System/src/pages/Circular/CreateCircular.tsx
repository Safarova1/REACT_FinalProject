// src/components/CreateCircular.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCircular, Circular } from "../../redux/slices/circularsSlice";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";

import dashboard from "../../assets/icons/Dashboard.png";
import CommonButton from "../../components/Button/Button";

const CreateCircular = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Circular>({
    id: Date.now(), // или генерируйте ID на сервере
    title: "",
    sender: "",
    recipients: "Received", // по умолчанию можно задать значение
    date: "",
    status: "Received", // статус должен быть 'Received' или 'Sent'
    action: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRecipientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      recipients: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(addCircular(formData));
      navigate("/circular-list");
    } catch (error) {
      console.error("Failed to add circular:", error);
    }
  };
  const handleSendCircular = () => {
    navigate('/circular');
  };
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
              <Navbar image={dashboard} username="Welcome, Mr. Otor John" date="Today is Saturday, 11th November 2022." />
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative ">
              <div className="w-[1112px]  mx-auto mt-8 ">

                <button
                  onClick={() => navigate(-1)}
                  className="text-blue-500 hover:text-blue-700 mb-[30px]"
                >
                  <span className="mr-1">&#8592;</span>Back
                </button>
                <h2 className="text-2xl font-bold mb-[60px]">Create Circular</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 p-4">
                  <div className="flex flex-col w-[350px]">
                    <label htmlFor="title" className="mb-2 text-gray-700">Circular Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="border p-2 rounded w-full border-slate-400"
                    />
                  </div>

                  <div className="flex flex-col w-[350px]">
                    <label htmlFor="sender" className="mb-2 text-gray-700">Sent from</label>
                    <input
                      type="text"
                      id="sender"
                      name="sender"
                      placeholder="Sender"
                      value={formData.sender}
                      onChange={handleInputChange}
                      required
                      className="border p-2 rounded w-full border-slate-400"
                    />
                  </div>

                  <div className="flex flex-col w-[350px]">
                    <label htmlFor="recipients" className="mb-2 text-gray-700">Sent to</label>
                    <select
                      id="recipients"
                      name="recipients"
                      value={formData.recipients}
                      onChange={handleRecipientChange}
                      className="border p-2 rounded w-full border-slate-400"
                    >
                      <option value="Select">Select option</option>
                      <option value="Received">Received</option>
                      <option value="Sent">Sent</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-[350px]">
                    <label htmlFor="date" className="mb-2 text-gray-700">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="border p-2 rounded w-full border-slate-400"
                    />
                  </div>

                  <div className="flex flex-col w-[100%]">
                    <label htmlFor="action" className="mb-2 text-gray-700">Circular Message</label>
                    <textarea
                      id="action"
                      name="action"
                      placeholder="Enter message..."
                      value={formData.action}
                      onChange={handleInputChange}
                      required
                      className="border p-2 rounded w-full border-slate-400 resize-none h-40"
                    />
                  </div>

                  <div className="flex flex-col w-[350px]">
                    <CommonButton
                      type="button"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 w-full"
                      label="Send Circular"
                      onClick={handleSendCircular}
                    />


                  </div>
                </form>
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

export default CreateCircular;








