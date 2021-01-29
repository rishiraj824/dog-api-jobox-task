
const defaultState: Array<String> = [];

export default (action, state = defaultState) => {

    switch (action.type) {
        case "BREED_FETCHED":
            
            return [];
    
        default:
            return state;
    }
}