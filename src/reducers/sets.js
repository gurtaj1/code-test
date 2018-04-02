const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_SETS':
            return {
                ...state,
                title: action.payload
            }
        case 'SETS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}