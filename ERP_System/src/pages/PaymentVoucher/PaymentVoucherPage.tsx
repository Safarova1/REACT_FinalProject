import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PaymentVoucherData {
  id: number;
  class: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  vatPercentage: number;
  vatAmount: number;
  grossAmount: number;
  whtPercentage: number;
  whtAmount: number;
  netAmount: number;
}

const PaymentVoucherPage: React.FC = () => {
  const [voucherData, setVoucherData] = useState<PaymentVoucherData[]>([]);
  const [filteredRows, setFilteredRows] = useState<PaymentVoucherData[]>([]);
  const [subjectClass, setSubjectClass] = useState<string>("");
  const [accountName, setAccountName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/db.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.paymentVoucherData) {
          setVoucherData(data.paymentVoucherData);
          setFilteredRows(data.paymentVoucherData);
        } else {
          console.error("No payment");
        }
      })
      .catch((error) => console.error("Error fetching voucher data:", error));
  }, []);

  useEffect(() => {
    if (subjectClass) {
      const lowercasedSubject = subjectClass.toLowerCase();
      setFilteredRows(
        voucherData.filter((voucher) =>
          voucher.class.toLowerCase().includes(lowercasedSubject)
        )
      );
    } else {
      setFilteredRows(voucherData);
    }
  }, [subjectClass, voucherData]);

  const addRow = () => {
    const newRow: PaymentVoucherData = {
      id: Date.now(),
      class: "",
      description: "",
      quantity: 0,
      unitPrice: 0,
      amount: 0,
      vatPercentage: 0,
      vatAmount: 0,
      grossAmount: 0,
      whtPercentage: 0,
      whtAmount: 0,
      netAmount: 0,
    };
    setVoucherData([...voucherData, newRow]);
    setFilteredRows([...filteredRows, newRow]);
  };

  const calculateTotal = (field: keyof PaymentVoucherData): string => {
    return filteredRows
      .reduce((total, row) => total + row[field], 0)
      .toLocaleString("en-NG");
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectClass(e.target.value);
  };

  const handleInputChange = (
    index: number,
    field: keyof PaymentVoucherData,
    value: any
  ) => {
    const updatedRows = [...filteredRows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };

    updatedRows[index].amount =
      updatedRows[index].quantity * updatedRows[index].unitPrice;
    updatedRows[index].vatAmount =
      (updatedRows[index].vatPercentage / 100) * updatedRows[index].amount;
    updatedRows[index].grossAmount =
      updatedRows[index].amount + updatedRows[index].vatAmount;
    updatedRows[index].whtAmount =
      (updatedRows[index].whtPercentage / 100) * updatedRows[index].grossAmount;
    updatedRows[index].netAmount =
      updatedRows[index].grossAmount - updatedRows[index].whtAmount;

    setFilteredRows(updatedRows);
    setVoucherData(
      voucherData.map((row, i) => (i === index ? updatedRows[index] : row))
    );
  };

  const handleSubmit = () => {
    try {
      const voucher = {
        voucherData,
        accountName,
        accountNumber,
        bankName,
      };

      localStorage.setItem("paymentVoucher", JSON.stringify(voucher));

      navigate("/");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold mb-4">Payment Voucher</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-3">Subject</label>
        <input
          type="text"
          value={subjectClass}
          onChange={handleSubjectChange}
          placeholder="Enter subject"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <table className="min-w-full bg-white rounded-lg mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left text-sm">S/N</th>
            <th className="py-2 px-4 border-b text-left text-sm">Class</th>
            <th className="py-2 px-4 border-b text-left text-sm">
              Description
            </th>
            <th className="py-2 px-4 border-b text-left text-sm">QTY</th>
            <th className="py-2 px-4 border-b text-left text-sm">
              Unit Price (₦)
            </th>
            <th className="py-2 px-4 border-b text-left text-sm">Amount (₦)</th>
            <th className="py-2 px-4 border-b text-left text-sm">VAT %</th>
            <th className="py-2 px-4 border-b text-left text-sm">
              VAT Amount (₦)
            </th>
            <th className="py-2 px-4 border-b text-left text-sm">
              Gross Amount (₦)
            </th>
            <th className="py-2 px-4 border-b text-left text-sm">WHT%</th>
            <th className="py-2 px-4 border-b text-left text-sm">
              WHT Amount (₦)
            </th>
            <th className="py-2 px-4 border-b text-left text-sm">
              Net Amount (₦)
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((voucher, index) => (
            <tr key={voucher.id}>
              <td className="py-2 px-4 border-b text-left">{index + 1}</td>
              <td className="py-2 px-4 border-b text-left">
                <input
                  type="text"
                  value={voucher.class}
                  onChange={(e) =>
                    handleInputChange(index, "class", e.target.value)
                  }
                  placeholder="Enter class"
                  className="w-full px-2 py-1 rounded-md border"
                />
              </td>
              <td className="py-2 px-4 border-b text-left">
                <input
                  type="text"
                  value={voucher.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                  className="w-full px-2 py-1 rounded-md border"
                />
              </td>
              <td className="py-2 px-4 border-b text-left">
                <input
                  type="text"
                  value={voucher.quantity}
                  onChange={(e) =>
                    handleInputChange(index, "quantity", Number(e.target.value))
                  }
                  className="w-full px-2 py-1 rounded-md border"
                />
              </td>
              <td className="py-2 px-4 border-b text-left">
                <input
                  type="text"
                  value={voucher.unitPrice.toLocaleString("en-NG")}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "unitPrice",
                      Number(e.target.value)
                    )
                  }
                  className="w-full px-2 py-1 rounded-md border"
                />
              </td>
              <td className="py-2 px-4 border-b text-left">
                {voucher.amount.toLocaleString("en-NG")}
              </td>
              <td className="py-2 px-4 border-b text-left">
                <input
                  type="text"
                  value={voucher.vatPercentage}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "vatPercentage",
                      Number(e.target.value)
                    )
                  }
                  className="w-full px-2 py-1 border rounded-md"
                />
              </td>
              <td className="py-2 px-4 border-b  text-left">
                {voucher.vatAmount.toLocaleString("en-NG")}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {voucher.grossAmount.toLocaleString("en-NG")}
              </td>
              <td className="py-2 px-4 border-b text-left">
                <input
                  type="text"
                  value={voucher.whtPercentage}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "whtPercentage",
                      Number(e.target.value)
                    )
                  }
                  className="w-full px-2 py-1 border rounded-md"
                />
              </td>
              <td className="py-2 px-4 border-b text-left">
                {voucher.whtAmount.toLocaleString("en-NG")}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {voucher.netAmount.toLocaleString("en-NG")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col mt-4">
        <button
          onClick={addRow}
          className="px-1 py-2 bg-white text-black rounded-lg shadow-md border hover:bg-blue-600 mb-4 text-sm w-1/6"
        >
          Add another row
        </button>
        <div className="flex justify-between items-center gap-4 border-b">
          <p className="font-bold">Total</p>
          <div>
            <div className="font-bold">{calculateTotal("unitPrice")}</div>
          </div>
          <div>
            <div className="font-bold">{calculateTotal("amount")}</div>
          </div>
          <div>
            <div className="font-bold">{calculateTotal("vatAmount")}</div>
          </div>
          <div>
            <div className="font-bold ">{calculateTotal("whtAmount")}</div>
          </div>
          <div>
            <div className="font-bold">{calculateTotal("netAmount")}</div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center">
        <p className="text-base mr-2">Net amount in words:</p>
        <div className="flex-grow border-b border-dashed border-gray-400 ml-2 "></div>
      </div>
      <h3 className="mt-8 font-bold text-lg">Beneficiary Payment Details</h3>
      <div className="flex flex-wrap gap-4 mb-4 mt-10">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-700 mb-2">Account Name</label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter account name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-700 mb-2">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-700 mb-2">Bank Name</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="Enter bank name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="px-3 py-3 bg-blue-600 rounded-md text-white text-sm shadow-white mt-5"
      >
        Submit Payment Voucher
      </button>
    </div>
  );
};

export default PaymentVoucherPage;
