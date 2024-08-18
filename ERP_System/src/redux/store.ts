import { configureStore } from "@reduxjs/toolkit";
import vouchersReducer from "./slices/voucherSlice";

const store = configureStore({
  reducer: {
    vouchers: vouchersReducer,
  },
});

export default store;
