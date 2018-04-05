import React from 'react';
import {connect} from 'react-redux';

import Episode from '../components/Episode'

class EpisodeCon extends React.Component {
    createEpisode() {
        if (!this.props.data.error) {
            let activeSet = this.props.data.sets.filter(  //get episode which corresponds to the current url
                set => set.uid === this.props.match.params.setuid
            )
            return activeSet.map(set => {
                return set.episodes.map(episode => {
                    if (episode.uid === this.props.match.params.episodeuid) {
                        function getUKDate() {  //convert end_date to uk format
                            let usaDate = episode.ends_on.slice(0, 10);
                            let usaDateArr = usaDate.split("-");
                            return usaDateArr[2] + "/" + usaDateArr[1] + "/" + usaDateArr[0];
                        }
                        return (
                            <Episode
                                key={episode.uid}
                                title={episode.title}
                                image={episode.image}
                                date={getUKDate()}
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