import { ApiResponse, ApiThunk } from '../../constants';
import { GalleryActionTypes, IMAGES_RECEIVED, SET_QUERY } from './types';

const getApi = (breed: string, limit: number) => `https://dog.ceo/api/breed/${breed}/images/random/${limit}`;

export const search = (query: string, limit: number): ApiThunk => async (disptach) => {
    const images: ApiResponse = await (await fetch(getApi(query, limit))).json();
    disptach({ type: IMAGES_RECEIVED, payload: images.message });
};

export function setQuery(query: string): GalleryActionTypes { 
    return { 
        type: SET_QUERY, 
        payload: query 
    }
}
