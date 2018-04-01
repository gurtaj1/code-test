import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {/*ConnectedRouter,*/ routerMiddleware} from 'react-router-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers/reducers'
import './index.css';
import Routes from './Routes';
import AllSets from './components/AllSets';

const history = createHistory({basename: '/'});
const routeHistoryMiddleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(routeHistoryMiddleware, thunk)));

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter history={history}>
                        <Routes />
                    </BrowserRouter>
                </Provider>
, document.getElementById('root'));