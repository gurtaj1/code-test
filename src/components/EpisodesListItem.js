import React from 'react';

class EpisodesListItem extends React.Component {
    render () {
        return (
            <div className="col-12">
                <p id="episodeTitle">{this.props.title}</p>
            </div>
        )
    }
}

export default EpisodesListItem;