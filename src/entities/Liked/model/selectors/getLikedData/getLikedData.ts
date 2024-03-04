import { StateSchema } from '../../../../../app/providers/StoreProvider';

export const getLikedData = (state: StateSchema) => state.liked?.data;
