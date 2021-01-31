import { Dispatch } from 'redux';
import { ApiResponse, ApiThunk, HOST } from '../../constants';
import { BreedActionTypes, BREEDS_RECEIVED } from './types';

const getBreedApi = () => `${HOST}/breeds/list/all`;

export function populateBreeds(breeds: string[]): BreedActionTypes {
  return { type: BREEDS_RECEIVED, payload: breeds }
}

export const getBreeds: ApiThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      // using local storage to avoid refetching
      if(localStorage.getItem('breeds') === null) {
        const breeds: ApiResponse = await (await fetch(getBreedApi())).json();
        localStorage.setItem('breeds', JSON.stringify(breeds));
      }
      const breedsResponse: string = localStorage.getItem('breeds') || "";
      const breeds: ApiResponse = JSON.parse(breedsResponse);
      return dispatch(populateBreeds(breeds.message));
    } catch (error) {
      if (error.response) {
        console.log('Network error', error.response);
      }
      console.log('error', error);

      return dispatch(populateBreeds([]));
    }
  };
};