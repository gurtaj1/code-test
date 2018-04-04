import React from 'react';

import Routes from './Routes';
import {NavBarContainer} from './containers/NavBarContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBarContainer />
                <Routes />
            </div>
        )
    }
}

export default App;