import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getSets from '../actions/getSets';

import AllSets from '../components/AllSets'

class AllSetsCon extends React.Component {
    componentWillMount() {
        this.props.getSets()
    }
    createAllSets () {
        return (
            <AllSets 
                sets={this.props.sets}
                getSets={() => this.props.getSets()}
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
    let sets = state.sets;

    return {
        sets: sets
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getSets: getSets}, dispatch);
}

export const AllSetsContainer = connect(mapStateToProps, mapDispatchToProps)(AllSetsCon);