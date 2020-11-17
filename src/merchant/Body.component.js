import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import {getUser} from "./service/Header.service";
import {useDispatch} from "react-redux";

const BodyComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUser(dispatch);
    })

    return (
        <div>
            BodyComponent
        </div>
    );
}
export default BodyComponent;