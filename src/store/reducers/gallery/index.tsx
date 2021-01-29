import { IMAGES_RECEIVED } from "../../types";

interface galleryState {
    query: String,
    images: Array<String>
}
const defaultState: galleryState = {
    query: '',
    images: []
}

type Action = {
    type: String,
    payload: any[]
}

export default (action: Action, state = defaultState) => {
    switch (action.type) {
        case IMAGES_RECEIVED:
            return [];
        default:
            return state;
    }
 }
