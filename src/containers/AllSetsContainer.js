import React from 'react';
import {connect} from 'react-redux';

import AllSets from '../components/AllSets'

class AllSetsCon extends React.Component {
    render () {
        return (
            <div>
                test
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

}

export const AllSetsContainer = connect(mapStateToProps)(AllSetsCon);