import vouchersReducer from "./slices/voucherSlice";

import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./slices/budgetSlice";
import userSlice from "./slices/userSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice,
    budget: budgetReducer,
    vouchers: vouchersReducer,
  },
});

export type RootStat = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
