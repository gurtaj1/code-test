const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_SET':
            return {
                ...state,
                title: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}