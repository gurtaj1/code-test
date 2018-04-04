import React from 'react';

class Episode extends React.Component {
    getUKDate() {
        let usaDate = this.props.date.slice(0, 10);
        let usaDateArr = usaDate.split("-");
        return usaDateArr[2] + "/" + usaDateArr[1] + "/" + usaDateArr[0];
    }
    render () {
        return (
            <div className="container-fluid text-center">
                <div className="row episodeHeader">
                    <div className="col-12">
                        <h1 id="episodeTitle">{this.props.title}</h1>
                    </div>
                </div>
                <div className="row videoPlayer justify-content-center">
                    <div className="col-12">
                        <p>Click image to play:</p>
                    </div>
                    <div className="col-md-8 col-12">
                        <img id="episodeImage" src={this.props.image} alt="episode-screen" />
                    </div>
                </div>
                <div className="row justify-content-center endDate">
                    <p>Episode ends on: {this.props.date}</p>
                </div>
            </div>
        )
    }
}

export default Episode;