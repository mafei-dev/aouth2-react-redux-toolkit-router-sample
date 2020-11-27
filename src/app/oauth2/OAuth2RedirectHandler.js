import React from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {updateAuthCreator} from "../store/users";
import {
    useLocation
} from "react-router-dom";

const OAuth2RedirectHandler = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        console.log("url ", location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

    }
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if (token) {
        // alert(process.env.REACT_APP_ACCESS_TOKEN +"token "+token);
        localStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN, token);

        dispatch(updateAuthCreator(
            {
                authenticated: true
            }
        ));
        return <Redirect to={{
            pathname: "/",
            state: {from: location}
        }}/>;
    } else {
        dispatch(updateAuthCreator(
            {
                authenticated: false
            }
        ));
        return <Redirect to={{
            pathname: "/login",
            state: {
                from: location,
                error: error
            }
        }}/>;
    }
}
export default OAuth2RedirectHandler;

