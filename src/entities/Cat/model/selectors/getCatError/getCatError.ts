import { StateSchema } from '../../../../../app/providers/StoreProvider';

export const getCatError = (state: StateSchema) => state.cat?.error;
