import { configureStore } from "@reduxjs/toolkit";
import salaryReducer from "./slices/salarySlice";
import taxReducer from "./slices/taxSlice";
import payslipsReducer from "./slices/payslipsSlice";

const stores = configureStore({
  reducer: {
    salary: salaryReducer,
    tax: taxReducer,
    payslips: payslipsReducer,
  },
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;
export default stores;
