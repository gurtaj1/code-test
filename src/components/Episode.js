import React from 'react';

class Episode extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="row episodeHeader">
                    <p id="episodeTitle">{this.props.title}</p>
                    <p id="episodeReleaseDate">{this.props.releaseDate}</p>
                </div>
                <div className="row videoPlayer">
                    <p>Click image to play:</p>
                    <img src={this.props.image} alt="episode-screen" />
                </div>
            </div>
        )
    }
}

export default Episode;