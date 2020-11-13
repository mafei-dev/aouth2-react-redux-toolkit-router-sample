import axios from 'axios';
import {createAction} from '@reduxjs/toolkit';

export const apiCallBegan = createAction("api/CallBegan");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallError = createAction("api/CallError");

const api = ({dispatch}) => next => async action => {
    console.log("API-MW");
    if (action.type !== apiCallBegan.type) {
        return next(action);
    } else {
        const {url, method, onStart, onSuccess, onError, data} = action.payload;
        if (onStart) dispatch({type: onStart});
        next(action);
        try {
            const response = await axios.request({
                baseURL: process.env.REACT_APP_API_URL,
                url,
                method,
                data
            });
            // dispatch(addAll(response.data));
            console.log("onSuccess ", onSuccess);

            dispatch({type: apiCallSuccess.type, payload: response.data});
            dispatch({type: onSuccess, payload: {request: data, response: response.data}});
        } catch (e) {
            // dispatch(apiCallError(e));
            dispatch({type: onError, payload: e.message});
        }
    }
};
export default api;