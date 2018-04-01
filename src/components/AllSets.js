import React from 'react';

import SetsListItem from './SetsListItem';

class AllSets extends React.Component {
    createSetsList () {

    }
    render () {
        return (
            <div className="container-fluid">
                <div className="row setsHeader">
                </div>
                <div className="row setsList">
                    {this.createSetsList()}
                </div>
            </div>
        )
    }
}

export default AllSets;