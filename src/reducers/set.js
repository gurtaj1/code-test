const initialState = [{
                        error: null,
                        data: [],
                        images: []
                    }];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_SET':
            return {
                ...state,
                error: null,
                data: action.data,
                images: action.images
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: true,
                data: [],
                images: []
            }
        default:
            return state
    }
}