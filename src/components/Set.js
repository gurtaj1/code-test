import React from 'react';

import EpisodesListItem from './EpisodesListItem';

class Set extends React.Component {
    createEpisodesList () {
        if (this.props.episodes.length>0) {
            return this.props.episodes.map(episode => {
                return (
                    <EpisodesListItem
                        key={episode.uid}
                        title={episode.title}
                    />
                )
            })
        } else {
            return (
                <div>
                    there are currently no episodes within this set.
                </div>
            )
        }
    }
    render () {
        return (
            <div className="container-fluid">
                <div className="row setHeader">
                    <p id="setTitle">{this.props.title}</p>
                    <p id="setQuote">{this.props.quote}</p>
                    <img src={this.props.image} alt="set-screen" />
                    <p id="setBody">{this.props.body}</p>
                </div>
                <div className="row episodesList">
                    {this.createEpisodesList()}
                </div>
            </div>
        )
    }
}

export default Set;