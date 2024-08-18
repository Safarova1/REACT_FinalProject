import { lazy, Suspense } from "react";
import { Router, Routes, Route } from "react-router-dom";
// import Staff from "./pages/Staff/Staff";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Staff = lazy(() => import("./pages/Staff/Staff"));
const PaymentVoucher = lazy(
  () => import("./pages/PaymentVoucher/PaymentVoucher")
);
const Payroll = lazy(() => import("./pages/Payroll/Payroll"));
// const Memo = lazy(() => import("../Memo/Memo"));
const Circular = lazy(() => import("./pages/Circular/Circular"));
// const Maintenance = lazy(() => import("../Maintenance/Maintenance"));
// const Logistics = lazy(() => import("./pages/Logistics/Logistics"));
const OfficeBudget = lazy(() => import("./pages/Budget/OfficeBudget"));
// const StocksInventory =
//   lazy();
// () => import("../StocksInventory/StocksInventory")
// const Notifications = lazy(() => import("../Notifications/Notifications"));
// const CapacityBuilding =
//   lazy();
// () => import("../CapacityBuilding/CapacityBuilding")
// const Procurements = lazy(() => import("../Procurements/Procurements"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (

    <div className="flex">
      <div className="flex-grow p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/payment-voucher" element={<PaymentVoucher />} />
            <Route path="/payroll" element={<Payroll />} />
            {/* <Route path="/memo" element={<Memo />} /> */}
            <Route path="/circular" element={<Circular />} />
            {/* <Route path="/maintenance" element={<Maintenance />} /> */}
            {/* <Route path="/logistics" element={<Logistics />} /> */}
            <Route path="/office-budget" element={<OfficeBudget />} />
            {/* <Route
                path="/stocks-and-inventory"
                element={<StocksInventory />}
              /> */}
            {/* <Route path="/notifications" element={<Notifications />} /> */}
            {/* <Route path="/capacity-building" element={<CapacityBuilding />} /> */}
            {/* <Route path="/procurements" element={<Procurements />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>

  );
}

export default App;
