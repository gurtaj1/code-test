const initialState = {
                        error: null,
                        data: []
                    };

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_SETS':
            return {
                ...state,
                error: null,
                data: action.data
            }
        case 'SETS_ERROR':
            return {
                ...state,
                error: true,
                data: []
            }
        default:
            return state
    }
}