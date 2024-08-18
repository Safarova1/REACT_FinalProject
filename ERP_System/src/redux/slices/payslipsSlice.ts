import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Payslip {
  id: number;
  staffName: string;
  title: string;
  level: string;
  basicSalary: number;
  allowance: number;
  grossSalary: number;
  deductions: number;
  netSalary: number;
}

interface PayslipState {
  payslips: Payslip[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: PayslipState = {
  payslips: [],
  status: "idle",
  error: null,
};

export const addPayslip = createAsyncThunk(
  "payslip/addPayslip",
  async (payslip: Payslip) => {
    const newPayslip = { ...payslip, id: Date.now() };

    const response = await axios.post(
      "http://localhost:3000/payslips",
      newPayslip
    );
    return response.data as Payslip;
  }
);

const payslipSlice = createSlice({
  name: "payslip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPayslip.fulfilled, (state, action) => {
        state.payslips.push(action.payload);
      })
      .addCase(addPayslip.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPayslip.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add payslip";
      });
  },
});

export default payslipSlice.reducer;
