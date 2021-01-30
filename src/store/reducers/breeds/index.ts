import { BreedActionTypes, BREEDS_RECEIVED } from './types';

const defaultState: string[] = [];

export function breeds(state = defaultState, action: BreedActionTypes): string[] {
    switch (action.type) {
        case BREEDS_RECEIVED:
            return action.payload
        default:
            return state;
    }
}
