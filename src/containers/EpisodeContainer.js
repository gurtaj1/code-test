import React from 'react';
import {connect} from 'react-redux';

import Episode from '../components/Episode'

class EpisodeCon extends React.Component {
    createEpisode() {
        if (!this.props.data.error) {
            let activeSet = this.props.data.sets.filter(
                set => set.uid === this.props.match.params.setuid
            )
            return activeSet.map(set => {
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
                {this.createEpisode()}
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

export const EpisodeContainer = connect(mapStateToProps)(EpisodeCon);