import { GalleryActionTypes, GalleryState, IMAGES_API_INIT, IMAGES_RECEIVED } from "./types";

const defaultState: GalleryState = {
    query: '',
    images: [],
    loading: false,
    total: 0,
    limit: 10
}

export function gallery(state = defaultState, action: GalleryActionTypes): GalleryState {
    switch (action.type) {
        case IMAGES_API_INIT:
            return {
                ...state,
                loading: true
            }
        case IMAGES_RECEIVED:
            return {
                ...state,
                images: action.payload,
                total: state.images.length + action.payload.length,
                loading: false
            }
        default:
            return state;
    }
 }
