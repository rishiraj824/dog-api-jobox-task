import { Dispatch } from 'redux';
import store from '../..';
import { ApiResponse, HOST, LIMIT } from '../../constants';
import { GalleryActionTypes, GalleryState, ImagePacket, IMAGES_API_INIT, IMAGES_RECEIVED, SET_LOADING, SET_QUERY } from './types';

const getApi = (breed: string) => `${HOST}/breed/${breed}/images/random/${LIMIT}`;

const gallery = (): GalleryState  => store.getState().gallery;

export function populateImages(images: string[]): GalleryActionTypes {
    return { type: IMAGES_RECEIVED, payload: images };
}

export const setQuery = (query: string): GalleryActionTypes => {
    return {
        type: SET_QUERY,
        payload: query
    };
}

export const setLoading = (): GalleryActionTypes => {
    return {
        type: SET_LOADING,
        payload: true
    }
}

export const search = async (dispatch: Dispatch) => {
    const query = gallery().query;
    dispatch(setLoading());

    const imageStore: ImagePacket = gallery().imageStore[query];
    if(!imageStore) {
        dispatch({ type: IMAGES_API_INIT, payload: query });
    }
    // no more images, return from store
    if(imageStore && imageStore.completed) {
        dispatch(populateImages(imageStore.images));
        return;
    }
    
    try {
        const images: ApiResponse = await (await fetch(getApi(query))).json();
        dispatch(populateImages(images.message));
    } catch (error)  {
        dispatch(populateImages([]));
    }
};

export const searchAction = (dispatch : Dispatch) => {
    return () => search(dispatch);
}
