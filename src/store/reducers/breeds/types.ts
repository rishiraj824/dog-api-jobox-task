export const BREEDS_RECEIVED = 'BREEDS_RECEIVED';

interface BreedReceivedAction {
    type: typeof BREEDS_RECEIVED,
    payload: any
}

export type BreedActionTypes = BreedReceivedAction