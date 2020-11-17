import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class LoginComponent extends Component {
    render() {
        return (
            <div>
                Login
                <br/>
                <Link to={"/"}>List</Link>
            </div>
        );
    }
}

LoginComponent.propTypes = {};

export default LoginComponent;