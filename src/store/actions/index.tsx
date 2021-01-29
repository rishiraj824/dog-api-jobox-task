import { IMAGES_RECEIVED, SET_QUERY } from '../types';
interface ApiResponse {
    message: Array<String>
}

const getApi = (breed: String, limit: Number) => `https://dog.ceo/api/breed/${breed}/images/random/${limit}`;

export const search = (query: String, limit: Number = 10) => async (disptach: any, getState: any) => {
    const images: ApiResponse = await (await fetch(getApi(query, limit))).json();
    disptach({ type: IMAGES_RECEIVED, payload: images.message });
};

export const setQuery = (query: String) => (disptach: any, getState: any) => disptach({ type: SET_QUERY, payload: query });