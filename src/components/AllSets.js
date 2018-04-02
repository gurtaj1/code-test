import React from 'react';

import SetsListItem from './SetsListItem';

class AllSets extends React.Component {
    createSetsList () {
        if(!this.props.sets.error){
            return this.props.sets.data.map(set => {
                console.log(set.image)
                return (
                    <SetsListItem
                        key={set.uid}
                        title={set.title}
                        quote={set.quoter}
                        image={set.image}
                    />
                )
            })
        } else {
            return (
                <div>
                    Oops! Looks like there was an error in retrieving the requested information. Please try again.
                </div>
            )
        }
    }
    componentDidMount() {
        this.props.getSets()
    }
    render () {
        return (
            <div className="container-fluid">
                <div className="row setsHeader">
                    All Sets
                </div>
                <div className="row setsList">
                    {this.createSetsList()}
                </div>
            </div>
        )
    }
}

export default AllSets;