const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_EPISODE':
            return {
                ...state,
                title: action.payload
            }
        case 'EPISODE_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}