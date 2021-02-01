export const IMAGES_API_INIT = 'IMAGES_API_INIT';
export const IMAGES_RECEIVED = 'IMAGES_RECEIVED';
export const SET_QUERY = 'SET_QUERY';
export const SET_LOADING = 'SET_LOADING';

interface ImagesReceivedAction {
    type: typeof IMAGES_RECEIVED
    payload: string[]
}

interface ImagesInitAction {
    type: typeof IMAGES_API_INIT,
    payload: any
}

interface SetQueryAction {
    type: typeof SET_QUERY,
    payload: string
}

interface SetLoading {
    type: typeof SET_LOADING,
    payload: boolean
}

export interface ImagePacket {
    images: string[],
    completed: boolean;
}

interface ImageStore {
    [key: string]: ImagePacket
}

export interface GalleryState {
    query: string,
    imageStore: ImageStore,
    loading: boolean,
    limit: number,
}

export type GalleryActionTypes = ImagesReceivedAction | ImagesInitAction | SetQueryAction | SetLoading