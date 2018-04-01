import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {AllSetsContainer} from './containers/AllSetsContainer';

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/" component={AllSetsContainer} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
