import React from 'react';

import EpisodesListItem from './EpisodesListItem';

class Set extends React.Component {
    createEpisodesList () {

    }
    render () {
        return (
            <div className="container-fluid">
                <div className="row setHeader">
                    <p id="setTitle"></p>
                    <p id="setReleaseDate"></p>
                </div>
                <div className="row episodesList">
                    {this.createEpisodesList()}
                </div>
            </div>
        )
    }
}

export default Set;