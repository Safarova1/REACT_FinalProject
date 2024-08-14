import { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="w-[1440px]  flex ">
            {/* Левая панель */}
            <div className="bg-[#FEE2E2] w-[260px] ">
              <h1 className="text-2xl font-bold">Меню</h1>
              <ul >
                <li className="hover:bg-[#F2F7FF] hover:text-blue-600">Dashboard</li>
                <li className="hover:bg-[#F2F7FF]">Staff</li>
                <li className="hover:bg-[#F2F7FF]">Payment Voucher</li>
                <li className="hover:bg-[#F2F7FF]">Payroll</li>
                <li className="hover:bg-[#F2F7FF]">Memo</li>
                <li className="hover:bg-[#F2F7FF]">Circulars</li>
                <li className="hover:bg-[#F2F7FF]">Maintenance</li>
                <li className="hover:bg-[#F2F7FF]">Logistics</li>
                <li className="hover:bg-[#F2F7FF]">Office Budget</li>
                <li className="hover:bg-[#F2F7FF]">Stocks and Inventory</li>
                <li className="hover:bg-[#F2F7FF]">Notifications</li>
                <li className="hover:bg-[#F2F7FF]">Capacity Building</li>
                <li className="hover:bg-[#F2F7FF]">Procurements</li>
              </ul>
            </div>

            {/* Правая панель */}
            <div className="flex-1 bg-[#F8F9FD] flex flex-col">
              {/* Навбар */}
              <div className=" h-24 flex justify-between items-center px-6 ">
                <div>
                  <h1 className="text-sm font-bold">Welcome, Mr. Otor John</h1>
                  <p className="text-xs ">
                    Today is Saturday, 11th November 2022.
                  </p>
                </div>
                <div>
                  <h1>Otor John</h1>
                  <p>HR Office</p>
                </div>
              </div>

              {/* Основной контент */}
              <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold">Дашборд</h1>
                <p>Основной контент здесь</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
