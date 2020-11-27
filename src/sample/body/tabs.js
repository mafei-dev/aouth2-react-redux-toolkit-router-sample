import React, {useEffect} from "react";
import {getUser} from "../../merchant/service/Header.service";
import {useDispatch} from "react-redux";

export const Tab1 = () => {
    return (<div>Tab1</div>);
}

export const Tab2 = () => {
    return (<div>Tab2</div>);
}

export const Tab3 = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUser(dispatch);
    })
    return (<div>Tab3 <button onClick={() => {
        getUser(dispatch)
    }}>GET</button></div>);
}