// src/features/circulars/circularsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Circular {
    id: string;
    title: string;
    sender: string;
    recipients: string;
    date: string;
    status: string;
    viewCount: number;
    action: string;
}

interface CircularState {
    circulars: Circular[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CircularState = {
    circulars: [],
    status: 'idle',
    error: null
};

// Async thunk to fetch data from API
export const fetchCirculars = createAsyncThunk<Circular[]>(
    'circulars/fetchCirculars',
    async () => {
        const response = await fetch('http://localhost:3000/circulars');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return response.json();
    }
);

const circularsSlice = createSlice({
    name: 'circulars',
    initialState,
    reducers: {
        addCircular(state, action: PayloadAction<Circular>) {
            state.circulars.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCirculars.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCirculars.fulfilled, (state, action: PayloadAction<Circular[]>) => {
                state.status = 'succeeded';
                state.circulars = action.payload;
            })
            .addCase(fetchCirculars.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch';
            });
    }
});

export const { addCircular } = circularsSlice.actions;
export default circularsSlice.reducer;
