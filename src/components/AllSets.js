import React from 'react';

import SetsListItem from './SetsListItem';

class AllSets extends React.Component {
    createSetsList () {
        if(!this.props.sets.error){
            return this.props.sets.map(set => {
                return (
                    <SetsListItem
                        key={set.uid}
                        title={set.title}
                        filmCount={set.film_count}
                    />
                )
            })
        } else {
            return (
                <div>
                    {this.props.sets.error.config.headers.Accept}
                </div>
            )
        }
    }
    render () {
        return (
            <div className="container-fluid">
                <div className="row setsHeader">
                    All Sets
                </div>
                <div className="row setsList">
                    <button onClick={() => this.props.getSets()}>Test</button>
                    {this.createSetsList()}
                </div>
            </div>
        )
    }
}

export default AllSets;