import { IMAGES_RECEIVED } from '../types';
interface ApiResponse {
    message: Array<String>
}

const getApi = (breed: String, limit: Number) => `https://dog.ceo/api/breed/${breed}/images/random/${limit}`;

export const search = (query: String, limit: Number = 10) => async (disptach, getState) => {
    const images = (await fetch(getApi(query, limit)));
    disptach({ type: IMAGES_RECEIVED, payload: images });
};
