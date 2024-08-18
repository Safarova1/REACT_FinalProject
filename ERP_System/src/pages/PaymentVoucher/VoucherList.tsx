import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Voucher {
  id: number;
  subject: string;
  date: string;
  preparedBy: string;
  sendTo: string;
}

export const VoucherList = () => {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [totalVouchers, setTotalVouchers] = useState(0);
  const navigate = useNavigate();

  const handleCreateVoucher = () => {
    navigate("./payment-voucher");
  };

  useEffect(() => {
    fetch("/src/db.json")
      .then((response) => response.json())
      .then((data) => {
        setVouchers(data.vouchers);
        setTotalVouchers(data.totalVouchers);
      })
      .catch((error) => console.error("Error fetching vouchers:", error));
  }, []);

  return (
    <div className="p-4 mx-auto container mt-[60px]  ">
      <div className="container mx-auto p-6 shadow-lg mt-6 flex px-5 py-5 border-b bg-white-900 items-center justify-between rounded-lg bg-white ">
        <div>
          <p className="text-3xl font-bold">{totalVouchers}</p>
          <h2 className="text-1xl text-gray-500 font-semibold mb-2">
            Total payment vouchers
          </h2>
        </div>
        <div>
          <p>Filter payment voucher</p>
          <form className="mb-3">
            <select
              required
              className="px-[65px] py-2 border bg-gray-100 text-gray-400 rounded-md pl-0"
            >
              <option className="text-base">All memos</option>
            </select>
          </form>
        </div>
        <div>
          <button
            onClick={handleCreateVoucher}
            className="px-3 py-3 bg-blue-600 rounded-md text-white text-sm shadow-white"
          >
            Create Payment Voucher
          </button>
        </div>
      </div>

      <div className="container mx-auto p-6 shadow-lg bg-white flex justify-between items-center mt-6  pb-5  ">
        <h3 className="text-xl font-bold">All Payment Vouchers</h3>
        <p>
          Showing
          <button className="py-2 px-3 bg-white text-blue-500 border-blue-500 border mr-1 ml-1">
            16
          </button>
          per page
        </p>
      </div>

      <table className="min-w-full rounded-lg  container mx-auto p-6 shadow-lg bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left text-sm">S/N</th>
            <th className="py-2 px-4 border-b text-left text-sm">Subject</th>
            <th className="py-2 px-4 border-b text-left text-sm">Date</th>
            <th className="py-2 px-4 border-b text-left text-sm">
              Prepared By
            </th>
            <th className="py-2 px-4 border-b text-left text-sm">Send To</th>
            <th className="py-2 px-4 border-b text-left text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher, index) => (
            <tr key={voucher.id}>
              <td className="py-2 px-4 border-b text-left">{index + 1}</td>
              <td className="py-2 px-4 border-b text-left">
                {voucher.subject}
              </td>
              <td className="py-2 px-4 border-b text-left">{voucher.date}</td>
              <td className="py-2 px-4 border-b text-left">
                {voucher.preparedBy}
              </td>
              <td className="py-2 px-4 border-b text-left">{voucher.sendTo}</td>
              <td className="py-2 px-4 border-b text-left">
                <a
                  onClick={handleCreateVoucher}
                  className="text-blue-500 cursor-pointer hover:underline hover:text-blue-600 transition duration-300 ease-out hover:ease-in "
                >
                  View more
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
