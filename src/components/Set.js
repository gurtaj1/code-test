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
                        link={"/" + this.props.setuid + "/" + episode.uid}
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
            <div className="container-fluid text-center">
                <div className="row setHeader">
                    <div className="col-12">
                        <h1 id="setTitle">{this.props.title}</h1>
                    </div>
                    <div className="col-12">
                        <p id="setQuote">{this.props.quote}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <img id="setImage" src={this.props.image} alt="set-screen" />
                    </div>
                </div>
                <div className="row justify-content-center setBodyRow">
                    <div className="col-md-8 col-12">
                        <p id="setBody">{this.props.body}</p>
                    </div>
                </div>
                <div className="row justify-content-center episodesList">
                    <div className="col-12">
                        <h2>Episodes</h2>
                    </div>
                    {this.createEpisodesList()}
                </div>
            </div>
        )
    }
}

export default Set;