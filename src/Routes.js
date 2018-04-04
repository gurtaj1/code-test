import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {AllSetsContainer} from './containers/AllSetsContainer';
import {SetContainer} from './containers/SetContainer';
import {EpisodeContainer} from './containers/EpisodeContainer';

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AllSetsContainer} />
          <Route exact path="/:setuid" component={SetContainer} />
          <Route path="/:setuid/:episodeuid" component={EpisodeContainer} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
