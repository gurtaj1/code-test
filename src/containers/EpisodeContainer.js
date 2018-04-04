import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getSets from '../actions/getSets';

import Episode from '../components/Episode'

class EpisodeCon extends React.Component {
    componentWillMount() {
        this.props.getSets();
    }
    createEpisode() {
        return this.props.activeSet.map(set => {
            return set.episodes.map(episode => {
                if (episode.uid === this.props.match.params.episodeuid) {
                    return (
                        <Episode
                            key={episode.uid}
                            title={episode.title}
                            image={episode.image}
                        />
                    )
                } else {
                    return (
                        ""
                    )
                }
            })

        })
    }
    render () {
        return (
            <div>
                {this.createEpisode()}
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

export const EpisodeContainer = connect(mapStateToProps, mapDispatchToProps)(EpisodeCon);