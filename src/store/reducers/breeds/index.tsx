import { BREEDS_RECEIVED } from '../../types';

const defaultState: Array<String> = [];

interface BreedAction {
    type: String,
    payload: any
}

export default (action: BreedAction, state = defaultState) => {

    switch (action.type) {
        case BREEDS_RECEIVED:
            
            return [];
    
        default:
            return state;
    }
}