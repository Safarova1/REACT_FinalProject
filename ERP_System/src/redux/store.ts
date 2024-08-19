import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import userSlice from "./slices/userSlice";
import circularsReducer from "./slices/circularsSlice";
import budgetReducer from "./slices/budgetSlice";
import vouchersReducer from "./slices/voucherSlice";
import salaryReducer from "./slices/salarySlice";
import taxReducer from "./slices/taxSlice";
import payslipsReducer from "./slices/payslipsSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    circulars: circularsReducer,
    budget: budgetReducer,
    vouchers: vouchersReducer,
    salary: salaryReducer,
    tax: taxReducer,
    payslips: payslipsReducer,
  },
});
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootStat = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
