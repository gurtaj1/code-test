import React from 'react';

import SetsListItem from './SetsListItem';

class AllSets extends React.Component {
    createSetsList () {
        if(!this.props.data.error){   //if api calls were made successfully
            return this.props.data.sets.map(set => {
                return (
                    <SetsListItem
                        key={set.uid}
                        title={set.title}
                        quote={set.quoter}
                        image={set.image}
                        link={"/"+set.uid} //create url to pass down to the link in SetsListItem
                    />
                )
            })
        } else { //if there was an error in making the api calls
            return (
                <div>
                    Oops! Looks like there was an error in retrieving the requested information. Please refresh the page to try again.
                </div>
            )
        }
    }
    render () {
        return (
            <div className="container-fluid text-center">
                <div className="row setsHeader">
                    <div className="col-12">
                        <h1>All Sets</h1>
                    </div>
                </div>
                <div className="row setsList">
                    <div className="col-12">
                        <div className="row">
                            {this.createSetsList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllSets;