import axios from "axios";
import {useDispatch} from "react-redux";
import {updateAuthCreator} from "../users";
import React from "react";
// Add a request interceptor
axios.defaults.baseURL = process.env.REACT_APP_FACEBOOK_PAY_API_BASE_URL;
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request.config ", config);

    config.headers.Authorization = "Bearer "+localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN);
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    return config;
}, function (error) {
    console.log("request.error ", error);
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response.response ", response);
    return response;
}, function (error) {

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
});

