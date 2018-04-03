import React from 'react';
import {Link} from 'react-router-dom';

class SetsListItem extends React.Component {
    render () {
        return (
            <div className="col-12">
                <Link to={this.props.link}><p id="setTitle">{this.props.title}</p></Link>
                <p id="setQuote">{this.props.quote}</p>
                <img src={this.props.image} alt="set-thumb" />
            </div>
        )
    }
}

export default SetsListItem;