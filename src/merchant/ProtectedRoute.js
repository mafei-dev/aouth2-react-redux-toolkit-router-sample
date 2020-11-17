import React from "react";
import {Route, Redirect} from "react-router-dom";
import {getIsAuthenticated} from "../app/store/users";
import {useSelector} from "react-redux";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    return (
        <Route {...rest} render={props => isAuthenticated === true ?
            (<Component {...props} />) :
            (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
        }/>
    );
};
export default ProtectedRoute;