import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getSets from '../actions/getSets';

import Set from '../components/Set'

class SetCon extends React.Component {
    componentWillMount() {
        this.props.getSets();
    }
    createSet () {
        return this.props.activeSet.map(set => {
            return (
                <Set
                    key={set.uid}
                    title={set.title}
                    quote={set.quoter}
                    image={set.image}
                    body={set.body}
                    episodes={set.episodes}
                    setuid={this.props.match.params.setuid}
                />
            )
        })
    }
    render () {
        return (
            <div>
                {this.createSet()}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    let sets = state.sets.data;
    let activeSet = sets.filter(
        set => set.uid === ownProps.match.params.setuid
    )

    return {
        activeSet: activeSet
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getSets: getSets}, dispatch);
}

export const SetContainer = connect(mapStateToProps, mapDispatchToProps)(SetCon);