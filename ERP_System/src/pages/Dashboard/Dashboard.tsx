import { Component } from "react";
import Sidebar from "../../components/Navbar/Sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="w-[1440px]  flex ">
            {/* Левая панель */}
            <div className="bg-[#FEE2E2] w-[260px] ">
              <Sidebar />
            </div>

            {/* Правая панель */}
            <div className="flex-1 bg-[#F8F9FD] flex flex-col">
              {/* Навбар */}
              <div className="  flex justify-between items-center px-6 ">
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
// import React, { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "../../components/Navbar/Sidebar";
// import Staff from "../Staff/Staff";
// import Sidebar from "./components/Sidebar";

// Лениво загружаемые компоненты
// const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
// const Staff = lazy(() => import("./pages/Staff/Staff"));
// const PaymentVoucher = lazy(() => import("../PaymentVoucher/PaymentVoucher"));
// const Payroll = lazy(() => import("../Payroll/Payroll"));
// // const Memo = lazy(() => import("../Memo/Memo"));
// const Circular = lazy(() => import("../Circular/Circular"));
// const Maintenance = lazy(() => import("../Maintenance/Maintenance"));
// const Logistics = lazy(() => import("../Logistics/Logistics"));
// const OfficeBudget = lazy(() => import("../OfficeBudget/OfficeBudget"));
// const StocksInventory = lazy(() => import("../StocksInventory/StocksInventory"));
// const Notifications = lazy(() => import("../Notifications/Notifications"));
// const CapacityBuilding = lazy(() => import("../CapacityBuilding/CapacityBuilding"));
// const Procurements = lazy(() => import("../Procurements/Procurements"));
// const NotFound = lazy(() => import("../NotFound/NotFound"));

// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-grow p-6">
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               {/* <Route path="/" element={<Dashboard />} />
//               <Route path="/dashboard" element={<Dashboard />} /> */}
//               <Route path="/staff" element={<Staff />} />
//               <Route path="/payment-voucher" element={<PaymentVoucher />} />
//               <Route path="/payroll" element={<Payroll />} />
//               {/* <Route path="/memo" element={<Memo />} /> */}
//               <Route path="/circulars" element={<Circular />} />
//               {/* <Route path="/maintenance" element={<Maintenance />} /> */}
//               {/* <Route path="/logistics" element={<Logistics />} /> */}
//               <Route path="/office-budget" element={<OfficeBudget />} />
//               <Route path="/stocks-and-inventory" element={<StocksInventory />} />
//               <Route path="/notifications" element={<Notifications />} />
//               <Route path="/capacity-building" element={<CapacityBuilding />} />
//               <Route path="/procurements" element={<Procurements />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Suspense>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
