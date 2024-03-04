import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Cat, CatSchema } from '../types/Cat';
import { fetchCatData } from '../services/fetchCatData/fetchCatData';

const initialState: CatSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCatData.fulfilled,
                (state, action: PayloadAction<Cat>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchCatData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: catReducer } = catSlice;
