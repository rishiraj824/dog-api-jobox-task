export const BREEDS_RECEIVED = 'BREEDS_RECEIVED';

interface BreedReceivedAction {
    type: typeof BREEDS_RECEIVED,
    payload: any
}

export interface BreedState{
    breeds: string[]
}

export type BreedActionTypes = BreedReceivedAction