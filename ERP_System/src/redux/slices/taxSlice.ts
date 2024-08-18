import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Tax {
  id: number;
  type: string;
  value: number;
}

interface TaxState {
  taxes: Tax[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: TaxState = {
  taxes: [],
  status: "idle",
  error: null,
};

export const fetchTaxes = createAsyncThunk("tax/fetchTaxes", async () => {
  const response = await axios.get("http://localhost:3000/tax");
  return response.data as Tax[];
});

export const addTax = createAsyncThunk("tax/addTax", async (tax: Tax) => {
  const newTax = { ...tax, id: Date.now() };
  const response = await axios.post("http://localhost:3000/tax", newTax);
  return response.data as Tax;
});

export const updateTax = createAsyncThunk("tax/updateTax", async (tax: Tax) => {
  const response = await axios.put(`http://localhost:3000/tax/${tax.id}`, tax);
  return response.data as Tax;
});

export const deleteTax = createAsyncThunk(
  "tax/deleteTax",
  async (id: number) => {
    await axios.delete(`http://localhost:3000/tax/${id}`);
    return id;
  }
);

const taxSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaxes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTaxes.fulfilled, (state, action) => {
        state.status = "idle";
        state.taxes = action.payload;
      })
      .addCase(fetchTaxes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch taxes";
      })
      .addCase(addTax.fulfilled, (state, action) => {
        state.taxes.push(action.payload);
      })
      .addCase(updateTax.fulfilled, (state, action) => {
        const index = state.taxes.findIndex(
          (tax) => tax.id === action.payload.id
        );
        if (index !== -1) {
          state.taxes[index] = action.payload;
        }
      })
      .addCase(deleteTax.fulfilled, (state, action) => {
        state.taxes = state.taxes.filter((tax) => tax.id !== action.payload);
      });
  },
});

export default taxSlice.reducer;
