import { createAsyncThunk } from '@reduxjs/toolkit';
import { Liked } from '../../types/Liked';
import { $api } from '../../../../../shared/api/api';

export const likedCat = createAsyncThunk<
    Liked,
    string,
    { rejectValue: string }
>('cat/liked', async (catId: string, thunkApi) => {
    const catLiked: Liked = {
        id: catId,
        liked: true,
    };
    try {
        const response = await $api.post<Liked>(`/cats/${catId}`, catLiked);

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue('Error');
    }
});
