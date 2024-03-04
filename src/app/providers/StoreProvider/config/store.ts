import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { catReducer } from '../../../../entities/Cat';
import { likedReducer } from '../../../../entities/Liked';

export const store = configureStore<StateSchema>({
    reducer: { cat: catReducer, liked: likedReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
