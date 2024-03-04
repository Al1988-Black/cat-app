export type { CatSchema } from './model/types/Cat';

export { catReducer } from './model/slice/catSlice';

export { fetchCatData } from './model/services/fetchCatData/fetchCatData';

export { getCatIsLoading } from './model/selectors/getCatIsLoading/getCatIsLoading';
export { getCatData } from './model/selectors/getCatData/getCatData';
export { getCatError } from './model/selectors/getCatError/getCatError';
