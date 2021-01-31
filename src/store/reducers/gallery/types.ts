export const IMAGES_API_INIT = 'IMAGES_API_INIT';
export const IMAGES_RECEIVED = 'IMAGES_RECEIVED';
export const SET_QUERY = 'SET_QUERY';

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
    total: number,
    limit: number,
}

export type GalleryActionTypes = ImagesReceivedAction | ImagesInitAction | SetQueryAction