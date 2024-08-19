import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Circular {
    id: number;
    title: string;
    sender: string;
    recipients: string;
    date: string;
    status: 'Received' | 'Sent';
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

export const addCircular = createAsyncThunk<Circular, Circular>(
    'circulars/addCircular',
    async (circularData) => {
        const response = await fetch('http://localhost:3000/circulars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(circularData),
        });
        if (!response.ok) {
            throw new Error('Failed to add circular');
        }
        return response.json();
    }
);

const circularsSlice = createSlice({
    name: 'circulars',
    initialState,
    reducers: {},
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
            })
            .addCase(addCircular.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCircular.fulfilled, (state, action: PayloadAction<Circular>) => {
                state.status = 'succeeded';
                state.circulars.push(action.payload);
            })
            .addCase(addCircular.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to add circular';
            });
    }
});

export default circularsSlice.reducer;
