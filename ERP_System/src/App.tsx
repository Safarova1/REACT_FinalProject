import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Staff = lazy(() => import("./pages/Staff/Staff"));
const PaymentVoucher = lazy(
  () => import("./pages/PaymentVoucher/PaymentVoucher")
);
const OfficeBudget = lazy(() => import("./pages/Budget/OfficeBudget"));
const Circular = lazy(() => import("./pages/Circular/Circular"));
const Payroll = lazy(() => import("./pages/Payroll/Payroll"));
const NotFound = lazy(() => import("./pages/NotFound"));
const StaffList = lazy(() => import("./pages/Staff/StaffList"));
const AddStaffList = lazy(() => import("./pages/Staff/AddStaffList"));
const EditStaffList = lazy(() => import("./pages/Staff/EditStaffList"));

// const Memo = lazy(() => import("../Memo/Memo"));
// const Maintenance = lazy(() => import("../Maintenance/Maintenance"));
// const Logistics = lazy(() => import("./pages/Logistics/Logistics"));
// const StocksInventory =
//   lazy();
// () => import("../StocksInventory/StocksInventory")
// const Notifications = lazy(() => import("../Notifications/Notifications"));
// const CapacityBuilding =
//   lazy();
// () => import("../CapacityBuilding/CapacityBuilding")
// const Procurements = lazy(() => import("../Procurements/Procurements"));

function App() {
  return (
    <div className="flex">
      <div className="flex-grow p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staff" element={<StaffList />}>
              <Route path="add-staff" element={<AddStaffList />} />
              <Route path="edit-staff/:id" element={<EditStaffList />} />
            </Route>
            <Route path="/payment-voucher" element={<PaymentVoucher />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/office-budget" element={<OfficeBudget />} />
            <Route path="/circular" element={<Circular />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/memo" element={<Memo />} /> */}
            {/* <Route path="/maintenance" element={<Maintenance />} /> */}
            {/* <Route path="/logistics" element={<Logistics />} /> */}
            {/* <Route
                path="/stocks-and-inventory"
                element={<StocksInventory />}
              /> */}
            {/* <Route path="/notifications" element={<Notifications />} /> */}
            {/* <Route path="/capacity-building" element={<CapacityBuilding />} /> */}
            {/* <Route path="/procurements" element={<Procurements />} /> */}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
