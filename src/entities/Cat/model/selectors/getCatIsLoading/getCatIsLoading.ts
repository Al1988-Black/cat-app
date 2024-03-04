import { StateSchema } from '../../../../../app/providers/StoreProvider';

export const getCatIsLoading = (state: StateSchema) => state.cat?.isLoading;
