import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class LoginComponent extends Component {
    render() {
        return (
            <div>
                Login
                <br/>
                <a className="btn btn-block social-btn google"
                   href={process.env.REACT_APP_FACEBOOK_PAY_GOOGLE_AUTH_URL}>Google</a>
                <button onClick={() => {
                    console.log("Login with google");
                }}>Login with google
                </button>
            </div>
        );
    }
}

LoginComponent.propTypes = {};

export default LoginComponent;