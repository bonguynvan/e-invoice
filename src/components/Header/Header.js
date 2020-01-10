import React, {Component} from "react";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        const {user: {displayName}, logout} = this.props;
        return(
            <div>
                {displayName}
                <button onClick={logout}>Logout</button>
            </div>
        )
    }
}
connect()(Header);
