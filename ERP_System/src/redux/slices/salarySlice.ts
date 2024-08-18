import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Salary {
  id: number;
  title: string;
  level: string;
  basicSalary: number;
  allowance: number;
  grossSalary: number;
  deductions: number;
  netSalary: number;
}

interface SalaryState {
  salaries: Salary[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: SalaryState = {
  salaries: [],
  status: "idle",
  error: null,
};

// Fetch salaries from the server
export const fetchSalaries = createAsyncThunk(
  "salary/fetchSalaries",
  async () => {
    const response = await axios.get("http://localhost:3000/salaries");
    return response.data as Salary[];
  }
);

// Add a new salary entry
export const addSalary = createAsyncThunk(
  "salary/addSalary",
  async (salary: Salary) => {
    const newSalary = { ...salary, id: Date.now() };

    const response = await axios.post(
      "http://localhost:3000/salaries",
      newSalary
    );
    return response.data as Salary;
  }
);

export const updateSalary = createAsyncThunk(
  "salary/updateSalary",
  async (salary: Salary) => {
    console.log("Updating salary with ID:", salary.id);
    console.log("Salary data:", salary);

    const response = await axios.put(
      `http://localhost:3000/salaries/${salary.id}`, 
      salary
    );
    return response.data as Salary;
  }
);

// Удаление записи зарплаты
export const deleteSalary = createAsyncThunk(
  "salary/deleteSalary",
  async (id: number) => {
    console.log("Deleting salary with ID:", id);

    await axios.delete(`http://localhost:3000/salaries/${id}`);
    return id;
  }
);

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalaries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSalaries.fulfilled, (state, action) => {
        state.status = "idle";
        state.salaries = action.payload;
      })
      .addCase(fetchSalaries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch salaries";
      })
      .addCase(addSalary.fulfilled, (state, action) => {
        state.salaries.push(action.payload);
      })
      .addCase(updateSalary.fulfilled, (state, action) => {
        const index = state.salaries.findIndex(
          (salary) => salary.id === action.payload.id
        );
        if (index !== -1) {
          state.salaries[index] = action.payload;
        }
      })
      .addCase(deleteSalary.fulfilled, (state, action) => {
        state.salaries = state.salaries.filter(
          (salary) => salary.id !== action.payload
        );
      });
  },
});

export default salarySlice.reducer;
