import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { VoucherList } from "./pages/PaymentVoucher/VoucherList";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const PaymentVoucherPage = lazy(
  () => import("./pages/PaymentVoucher/PaymentVoucherPage")
);

const OfficeBudget = lazy(() => import("./pages/Budget/OfficeBudget"));
const MainCircular = lazy(() => import("./pages/Circular/MainCircular"));



const SalaryBreakdown = lazy(() => import("./pages/Payroll/SalaryBreakdown"));
const CreateSalaryDefinition = lazy(() => import("./pages/Payroll/CreateSalaryDefinition"));
const EditSalaryDefinition = lazy(() => import("./pages/Payroll/EditSalaryDefinition"));
const DeleteSalaryDefinition = lazy(() => import("./pages/Payroll/DeleteSalaryDefinition"));
const CreateTaxDefinition = lazy(() => import("./pages/Payroll/CreateTaxDefinition"));
const Tax = lazy(() => import("./pages/Payroll/Tax"));
const Payroll = lazy(() => import("./pages/Payroll/Payroll"));
const Payslips = lazy(() => import("./pages/Payroll/Payslips"));
const CreatePayslip = lazy(() => import("./pages/Payroll/CreatePayslip"));



const SignInPage = lazy(() => import("./pages/Authentication/SignInPage"));
const SignUpPage = lazy(() => import("./pages/Authentication/SignUpPage"));
const CreateBudgetSection = lazy(
  () => import("./pages/Budget/layout/CreateBudgetSection")
);
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
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staff" element={<StaffList />} />
            <Route path="/staff/add-staff" element={<AddStaffList />} />
            <Route path="/staff/edit-staff/:id" element={<EditStaffList />} />

            <Route path="/payment" element={<VoucherList />} />
            <Route
              path="/payment/payment-voucher"
              element={<PaymentVoucherPage />}
            />

            <Route path="/salary-breakdown" element={<SalaryBreakdown />} />
            <Route path="/create-salary" element={<CreateSalaryDefinition />} />
            <Route path="/edit-salary/:id" element={<EditSalaryDefinition />} />
            <Route path="/delete-salary/:id" element={<DeleteSalaryDefinition />} />
            <Route path="/create-tax" element={<CreateTaxDefinition />} />
            <Route path="/tax" element={<Tax />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/create-payslip" element={<CreatePayslip />} />



            <Route path="/budget" element={<OfficeBudget />} />
            <Route path="/createBudget" element={<CreateBudgetSection />} />
            <Route path="/circular" element={<MainCircular />} />
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
