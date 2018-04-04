import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getSets from '../actions/getSets';

class NavBarCon extends React.Component {
    componentWillMount() {
        this.props.getSets();
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
    return bindActionCreators({getSets: getSets}, dispatch);
}

export const NavBarContainer = connect(null, mapDispatchToProps)(NavBarCon);