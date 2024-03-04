import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cat } from '../../types/Cat';
import { $api } from '../../../../../shared/api/api';

export const fetchCatData = createAsyncThunk<
    Cat,
    string,
    { rejectValue: string }
>('cat/fetchCatData', async (catId, thunkApi) => {
    try {
        const response = await $api.get<Cat>(`/cats/${catId}`);

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue('error');
    }
});
