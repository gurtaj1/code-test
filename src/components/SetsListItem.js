import React from 'react';
import {Link} from 'react-router-dom';

class SetsListItem extends React.Component {
    render () {
        return (
            <div className="col-md-3 col-12 setThumb">
                <Link to={this.props.link}><p id="setTitle">{this.props.title}</p></Link>
                <p id="setQuote">{this.props.quote}</p>
                <Link to={this.props.link}><img id="setThumbImage" src={this.props.image} alt="set-thumb" /></Link>
            </div>
        )
    }
}

export default SetsListItem;