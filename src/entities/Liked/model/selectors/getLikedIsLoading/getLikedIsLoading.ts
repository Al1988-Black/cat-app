import { StateSchema } from '../../../../../app/providers/StoreProvider';

export const getLikedIsLoading = (state: StateSchema) => state.liked?.isLoading;
