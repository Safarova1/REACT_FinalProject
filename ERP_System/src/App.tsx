import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Staff = lazy(() => import("./pages/Staff/Staff"));
const PaymentVoucher = lazy(
  () => import("./pages/PaymentVoucher/PaymentVoucher")
);
const OfficeBudget = lazy(() => import("./pages/Budget/OfficeBudget"));
const Circular = lazy(() => import("./pages/Circular/Circular"));

const CreateSalaryDefinition = lazy(
  () => import("./pages/Payroll/CreateSalaryDefinition")
);
const EditSalaryDefinition = lazy(
  () => import("./pages/Payroll/EditSalaryDefinition")
);
const DeleteSalaryDefinition = lazy(
  () => import("./pages/Payroll/DeleteSalaryDefinition")
);
const CreateTaxDefinition = lazy(
  () => import("./pages/Payroll/CreateTaxDefinition")
);

const Tax = lazy(() => import("./pages/Payroll/Tax"));

const Payslips = lazy(() => import("./pages/Payroll/Payslips"));

const Payroll = lazy(() => import("./pages/Payroll/Payroll"));

const PayrollList = lazy(() => import("./pages/Payroll/PayrollList"));

const CreatePayslip = lazy(() => import("./pages/Payroll/CreatePayslip"));

const SignInPage = lazy(() => import("./pages/Authentication/SignInPage"));
const SignUpPage = lazy(() => import("./pages/Authentication/SignUpPage"));
const CreateBudgetSection = lazy(
  () => import("./pages/Budget/layout/CreateBudgetSection")
);
const NotFound = lazy(() => import("./pages/NotFound"));

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
            <Route path="/staff" element={<Staff />} />
            <Route path="/payment-voucher" element={<PaymentVoucher />} />

            <Route path="/create-salary" element={<CreateSalaryDefinition />} />
            <Route path="/edit-salary/:id" element={<EditSalaryDefinition />} />
            <Route
              path="/delete-salary/:id"
              element={<DeleteSalaryDefinition />}
            />
            <Route path="/create-tax" element={<CreateTaxDefinition />} />
            <Route path="/tax" element={<Tax />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/create-payslip" element={<CreatePayslip />} />
            <Route path="/payroll-list" element={<PayrollList />} />
            <Route path="/budget" element={<OfficeBudget />} />
            <Route path="/createBudget" element={<CreateBudgetSection />} />
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
