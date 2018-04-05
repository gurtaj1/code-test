import React from 'react';
import {connect} from 'react-redux';

import Set from '../components/Set'

class SetCon extends React.Component {
    createSet () {
        if (!this.props.data.error) {
            let activeSet = this.props.data.sets.filter( //get the set which corresponds to the current url
                set => set.uid === this.props.match.params.setuid
            )
            return activeSet.map(set => {
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
        } else {
            return (
                <div>
                    Oops! Looks like there was an error in retrieving the requested information. Please refresh the page to try again.
                </div>
            )
        }
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
    let data = state.data;
    
    return {
        data: data
    }
}

export const SetContainer = connect(mapStateToProps)(SetCon);