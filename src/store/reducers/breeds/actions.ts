import { ApiResponse, ApiThunk, HOST } from '../../constants';
import { BREEDS_RECEIVED } from './types';

const getBreedApi = () => `${HOST}/breeds/list/all`;

export const getBreeds = (): ApiThunk => async dispatch => {
  const breeds: ApiResponse = await (await fetch(getBreedApi())).json();
  dispatch({ type: BREEDS_RECEIVED, payload: breeds.message });
}
