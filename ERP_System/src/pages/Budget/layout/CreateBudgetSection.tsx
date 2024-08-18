import React, { useId, useState } from "react";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonButton from "../../../components/Button/Button";
import { IBudgetInfo } from "../../../components/types/budgetInfoTypes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBudgetItem } from "../../../redux/slices/operation";

import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Navbar/Sidebar";

const CreateBudgetSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingBudget = JSON.parse(localStorage.getItem("budget") || "[]");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const budgetNoId = useId();
  const budgetDescriptionId = useId();
  const budgetedAmountId = useId();
  const actualAmountId = useId();
  const varianceId = useId();
  const dateId = useId();

  const handleAddItem = (values: IBudgetInfo) => {
    const newItem: IBudgetInfo = {
      ...values,
      Date: startDate ? startDate.toISOString() : "",
      id: new Date().getTime(),
      isLoading: false,
      error: null,
    };
    dispatch(addBudgetItem(newItem));

    const updatedBudget = [...existingBudget, newItem];
    localStorage.setItem("budget", JSON.stringify(updatedBudget));

    navigate("/budget");
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
            <div className="flex justify-between items-center  py-[26px] px-4  ">
              <Navbar />
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-8 items-center justify-center py-[26px] px-4 relative ">
              <div className="w-[1112px]  mx-auto mt-8 ">
                <section className="p-4 bg-backgroundColor mt-8 mx-auto flex justify-center items-center w-full max-w-[1132px]">
                  <Formik
                    initialValues={{
                      BudgetNo: "",
                      BudgetDescription: "",
                      BudgetedAmount: "",
                      ActualAmount: "",
                      Variance: "",
                      Date: startDate ? startDate.toISOString() : "",
                    }}
                    onSubmit={(values) => handleAddItem(values)}
                  >
                    {({ setFieldValue }) => (
                      <Form className="bg-white pt-[24px] pr-[38px] pb-[47px] pl-[20px] rounded-[20px]">
                        <h4 className="text-[20px] leading-[27px] font-extrabold mb-[8px]">
                          Create Budget
                        </h4>
                        <p className="text-[14px] leading-[24px] font-normal mb-[32px]">
                          Kindly fill in the form below to create a budget
                        </p>
                        <div className="flex flex-wrap gap-6">
                          <div className="mb-6">
                            <label
                              className="block text-[14px] leading-[24px] font-normal mb-[8px]"
                              htmlFor={budgetNoId}
                            >
                              Budget number
                            </label>
                            <Field
                              name="BudgetNo"
                              id={budgetNoId}
                              className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                              placeholder="Enter item"
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-2 text-[14px] leading-[24px] font-normal"
                              htmlFor={budgetDescriptionId}
                            >
                              Budget description
                            </label>
                            <Field
                              name="BudgetDescription"
                              id={budgetDescriptionId}
                              className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                              placeholder="Enter description"
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-2 text-[14px] leading-[24px] font-normal"
                              htmlFor={budgetedAmountId}
                            >
                              Budget amount
                            </label>
                            <Field
                              name="BudgetedAmount"
                              id={budgetedAmountId}
                              className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                              placeholder="Enter amount"
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-2 text-[14px] leading-[24px] font-normal"
                              htmlFor={actualAmountId}
                            >
                              Actual Amount (₦)
                            </label>
                            <Field
                              name="ActualAmount"
                              id={actualAmountId}
                              className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                              placeholder="Enter item"
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-2 text-[14px] leading-[24px] font-normal"
                              htmlFor={varianceId}
                            >
                              Variance (₦)
                            </label>
                            <Field
                              name="Variance"
                              id={varianceId}
                              className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                              placeholder="Enter item"
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-2 text-[14px] leading-[24px] font-normal"
                              htmlFor={dateId}
                            >
                              Date
                            </label>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => {
                                setStartDate(date);
                                setFieldValue(
                                  "Date",
                                  date ? date.toISOString() : ""
                                );
                              }}
                              dateFormat="P"
                              className="pt-[13px] pr-[20px] pb-[13px] pl-[12px] p-2 border border-gray-300 rounded-lg w-[350px]"
                              id={dateId}
                            />
                          </div>
                        </div>
                        <CommonButton
                          type="submit"
                          label="Create Budget"
                          className="text-white w-[350px] rounded-[10px] p-[10px]"
                        />
                      </Form>
                    )}
                  </Formik>
                </section>
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

export default CreateBudgetSection;

{
  /* // ----------------------------------------------------------
const CreateBudgetSection: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingBudget = JSON.parse(localStorage.getItem("budget") || "[]");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const budgetNoId = useId();
  const budgetDescriptionId = useId();
  const budgetedAmountId = useId();
  const actualAmountId = useId();
  const varianceId = useId();
  const dateId = useId();

  const handleAddItem = (values: IBudgetInfo) => {
    const newItem: IBudgetInfo = {
      ...values,
      Date: startDate ? startDate.toISOString() : "",
      id: new Date().getTime(),
      isLoading: false,
      error: null,
    };
    dispatch(addBudgetItem(newItem));

    const updatedBudget = [...existingBudget, newItem];
    localStorage.setItem("budget", JSON.stringify(updatedBudget));

    navigate("/budget");
  };

  return (
    <section className="p-4 bg-backgroundColor mt-8 mx-auto flex justify-center items-center w-full max-w-[1132px]">
      <Formik
        initialValues={{
          BudgetNo: "",
          BudgetDescription: "",
          BudgetedAmount: "",
          ActualAmount: "",
          Variance: "",
          Date: startDate ? startDate.toISOString() : "",
        }}
        onSubmit={(values) => handleAddItem(values)}
      >
        {({ setFieldValue }) => (
          <Form className="bg-white pt-[24px] pr-[38px] pb-[47px] pl-[20px] rounded-[20px]">
            <h4 className="text-[20px] leading-[27px] font-extrabold mb-[8px]">
              Create Budget
            </h4>
            <p className="text-[14px] leading-[24px] font-normal mb-[32px]">
              Kindly fill in the form below to create a budget
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="mb-6">
                <label
                  className="block text-[14px] leading-[24px] font-normal mb-[8px]"
                  htmlFor={budgetNoId}
                >
                  Budget number
                </label>
                <Field
                  name="BudgetNo"
                  id={budgetNoId}
                  className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                  placeholder="Enter item"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-[14px] leading-[24px] font-normal"
                  htmlFor={budgetDescriptionId}
                >
                  Budget description
                </label>
                <Field
                  name="BudgetDescription"
                  id={budgetDescriptionId}
                  className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                  placeholder="Enter description"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-[14px] leading-[24px] font-normal"
                  htmlFor={budgetedAmountId}
                >
                  Budget amount
                </label>
                <Field
                  name="BudgetedAmount"
                  id={budgetedAmountId}
                  className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                  placeholder="Enter amount"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-[14px] leading-[24px] font-normal"
                  htmlFor={actualAmountId}
                >
                  Actual Amount (₦)
                </label>
                <Field
                  name="ActualAmount"
                  id={actualAmountId}
                  className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                  placeholder="Enter item"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-[14px] leading-[24px] font-normal"
                  htmlFor={varianceId}
                >
                  Variance (₦)
                </label>
                <Field
                  name="Variance"
                  id={varianceId}
                  className="border border-gray-400 rounded-lg pt-[13px] pr-[20px] pb-[13px] pl-[12px] w-[350px]"
                  placeholder="Enter item"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-[14px] leading-[24px] font-normal"
                  htmlFor={dateId}
                >
                  Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setFieldValue("Date", date ? date.toISOString() : "");
                  }}
                  dateFormat="P"
                  className="pt-[13px] pr-[20px] pb-[13px] pl-[12px] p-2 border border-gray-300 rounded-lg w-[350px]"
                  id={dateId}
                />
              </div>
            </div>
            <CommonButton
              type="submit"
              label="Create Budget"
              className="text-white w-[350px] rounded-[10px] p-[10px]"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
}; */
}
