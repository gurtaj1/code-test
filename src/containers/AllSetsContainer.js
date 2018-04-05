import React from 'react';
import {connect} from 'react-redux';

import AllSets from '../components/AllSets'

class AllSetsCon extends React.Component {
    createAllSets () {  //pass props to child component
        return (
            <AllSets 
                data={this.props.data}
            />
        )
    }
    render () {
        return (
            <div>
                {this.createAllSets()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    let data = state.data;

    return {
        data: data
    }
}

export const AllSetsContainer = connect(mapStateToProps)(AllSetsCon);