import React from 'react';

class SetsListItem extends React.Component {
    render () {
        return (
            <div className="col-12">
                <p id="setTitle">{this.props.title}</p>
                <p id="filmCount">{this.props.filmCount}</p>
            </div>
        )
    }
}

export default SetsListItem;