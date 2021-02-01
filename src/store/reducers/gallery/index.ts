import { GalleryActionTypes, GalleryState, IMAGES_API_INIT, IMAGES_RECEIVED, SET_LOADING, SET_QUERY } from "./types";

const defaultState: GalleryState = {
    query: 'pug',
    imageStore: {
        'pug': {
            images: [],
            completed: false,
        },
    },
    loading: false,
    limit: 10,
}

export function gallery(state = defaultState, action: GalleryActionTypes): GalleryState {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case IMAGES_API_INIT:
            return {
                ...state,
                query: action.payload,
                imageStore: {
                    ...state.imageStore,
                    [action.payload]: {
                        completed: false,
                        images: []
                    }
                }
            }
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case IMAGES_RECEIVED:
            const nonDuplicateImages = new Set([...state.imageStore[state.query].images,...action.payload])
            const images = Array.from(nonDuplicateImages);
            const completed = state.imageStore[state.query].images.length === images.length;
            return {
                ...state,
                imageStore: {
                    ...state.imageStore,
                    [state.query]: {
                        images,
                        completed
                    }
                },
                loading: false
            }
        default:
            return state;
    }
 }
