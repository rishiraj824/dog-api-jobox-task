import { GalleryActionTypes, GalleryState, IMAGES_API_INIT, IMAGES_RECEIVED, SET_QUERY } from "./types";

const defaultState: GalleryState = {
    query: 'pug',
    imageStore: {
        'pug': {
            images: [],
            completed: false
        },
    },
    loading: false,
    total: 0,
    limit: 10,
}

export function gallery(state = defaultState, action: GalleryActionTypes): GalleryState {
    switch (action.type) {
        case IMAGES_API_INIT:
            return {
                ...state,
                loading: true,
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
            const setImages = state.imageStore[state.query] ? new Set([...state.imageStore[state.query].images,...action.payload])
                 : new Set(action.payload);
            const images = Array.from(setImages);
            const completed = state.total === images.length;
            const total = completed ? images.length : images.length + action.payload.length;
            return {
                ...state,
                imageStore: {
                    ...state.imageStore,
                    [state.query]: {
                        images,
                        completed
                    }
                },
                total,
                loading: false
            }
        default:
            return state;
    }
 }
