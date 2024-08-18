import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Voucher {
  id: string;
  subject: string;
  date: string;
  preparedBy: string;
  sendTo: string;
}

interface VouchersState {
  list: Voucher[];
}

const initialState: VouchersState = {
  list: [],
};

const vouchersSlice = createSlice({
  name: "vouchers",
  initialState,
  reducers: {
    setVouchers(state, action: PayloadAction<Voucher[]>) {
      state.list = action.payload;
    },
  },
});

export const { setVouchers } = vouchersSlice.actions;

export default vouchersSlice.reducer;
