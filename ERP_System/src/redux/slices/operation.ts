import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Voucher } from "./voucherSlice";

export const fetchVouchers = createAsyncThunk<Voucher[]>(
  "vouchers/fetchVouchers",
  async () => {
    const response = await axios.get<Voucher[]>(
      "http://localhost:3000/vouchers"
    );
    return response.data;
  }
);

export const addVoucher = createAsyncThunk<Voucher, Voucher>(
  "vouchers/addVoucher",
  async (voucher) => {
    const response = await axios.post<Voucher>(
      "http://localhost:3000/vouchers",
      voucher
    );
    return response.data;
  }
);
