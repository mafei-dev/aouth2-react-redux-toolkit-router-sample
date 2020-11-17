import React from "react";
import {Route, Redirect} from "react-router-dom";
import {getIsAuthenticated} from "../app/store/users";
import {useSelector} from "react-redux";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    console.log('REACT_APP_FACEBOOK_PAY_GOOGLE_AUTH_URL', process.env.REACT_APP_FACEBOOK_PAY_GOOGLE_AUTH_URL)
    return (
        <Route {...rest} render={props => {
            if (isAuthenticated) {
                return <Component {...props}/>;
            } else {
                return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>;
            }
        }}/>
    );
};
export default ProtectedRoute;