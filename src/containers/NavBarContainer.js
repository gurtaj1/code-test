import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getData from '../actions/getData';

class NavBarCon extends React.Component {
    componentWillMount() {  //dispatch action for api calls before component is rendered
        this.props.getData();
    }
    render() {
        return (
            <div className="navBar">
                <div className="links text-center">
                    <Link to="/">All Sets</Link>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getData: getData}, dispatch);
}

export const NavBarContainer = connect(null, mapDispatchToProps)(NavBarCon);