import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {AllSetsContainer} from './containers/AllSetsContainer';
import {SetContainer} from './containers/SetContainer';

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AllSetsContainer} />
          <Route path="/set/:uid" component={SetContainer} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
