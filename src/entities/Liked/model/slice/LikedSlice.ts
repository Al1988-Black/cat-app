import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Liked, LikedSchema } from '../types/Liked';
import { likedCat } from '../services/likedCat/likedCat';

const initialState: LikedSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const likedSlice = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        deleteLiked: (state) => {
            state.data = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(likedCat.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                likedCat.fulfilled,
                (state, action: PayloadAction<Liked>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(likedCat.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: likedReducer } = likedSlice;
export const { actions: likedActions } = likedSlice;
