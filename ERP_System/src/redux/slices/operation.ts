import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Voucher } from "./voucherSlice";
import { IBudgetInfo } from "../../components/types/budgetInfoTypes";

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

axios.defaults.baseURL = "http://localhost:3000";

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        credentials
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Ошибка авторизации"
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (_, thunkApi) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        {
          email: "john@mail.com",
          password: "changeme",
          name: "John Doe",
          avatar: "https://example.com/default-avatar.png",
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(
          error.response?.data.message || error.message
        );
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchBudgetInfo = createAsyncThunk(
  "budget/fetchBudgetInfo",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/budgetHistory");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(
          error.response?.data.message || error.message
        );
      }
    }
  }
);

export const addBudgetItem = createAsyncThunk(
  "budget/addBudgetItem",
  async (newItem: IBudgetInfo, thunkApi) => {
    try {
      const response = await axios.post("/budgetHistory", newItem);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(
          error.response?.data.message || error.message
        );
      }
    }
  }
);
