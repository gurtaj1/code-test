import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import sets from './sets';
import set from './set';
import episode from './episode';

const reducers = combineReducers({
    sets: sets,
    set: set,
    episode: episode,

    router: routerReducer
})

export default reducers;