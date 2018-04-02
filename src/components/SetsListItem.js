import React from 'react';

class SetsListItem extends React.Component {
    render () {
        return (
            <div className="col-12">
                <p id="setTitle">{this.props.title}</p>
                <p id="setQuote">{this.props.quote}</p>
                <img src={this.props.image} alt="set-thumb" />
            </div>
        )
    }
}

export default SetsListItem;