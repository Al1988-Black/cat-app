import { StateSchema } from '../../../../../app/providers/StoreProvider';

export const getLikedError = (state: StateSchema) => state.liked?.error;
