import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import {getUser} from "./service/Header.service";
import {useDispatch} from "react-redux";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import {Tab1, Tab2, Tab3} from "../sample/body/tabs";
const BodyComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUser(dispatch);
    })

    return (
        <div>
            <Switch>
                <Route path={"/"} exact component={Tab1}/>
                <Route path={"/t2"} exact component={Tab2}/>
                <Route path={"/t3"} exact component={Tab3}/>
            </Switch>
        </div>
    );
}
export default BodyComponent;