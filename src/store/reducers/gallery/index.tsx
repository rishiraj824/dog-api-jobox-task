
interface galleryState {
    query: String,
    images: Array
}
const defaultState: galleryState = {
    query: '',
    images: []
}

export default (action, state = defaultState) => {
    switch (action.type) {
        case 'RECEIVED_IMAGES':
            return [];
            break;
        default:
            return state;
            break;
    }
 }
