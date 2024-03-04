export type { LikedSchema } from './model/types/Liked';

export { likedReducer, likedActions } from './model/slice/LikedSlice';

export { likedCat } from './model/services/likedCat/likedCat';

export { getLikedIsLoading } from './model/selectors/getLikedIsLoading/getLikedIsLoading';
export { getLikedData } from './model/selectors/getLikedData/getLikedData';
export { getLikedError } from './model/selectors/getLikedError/getCatError';
