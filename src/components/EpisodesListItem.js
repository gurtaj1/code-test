import React from 'react';
import {Link} from 'react-router-dom';

class EpisodesListItem extends React.Component {
    render () {
        return (
            <div className="col-12">
                <Link to={this.props.link}><p id="episodeTitle">{this.props.title}</p></Link>
            </div>
        )
    }
}

export default EpisodesListItem;