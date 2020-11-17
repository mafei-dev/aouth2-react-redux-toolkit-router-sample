import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import MerchantComponent from "./merchant/Merchant.component";
import {BrowserRouter, Route} from "react-router-dom";
import ProtectedRoute from "./merchant/ProtectedRoute";
import LoginComponent from "./merchant/Login.component";
import OAuth2RedirectHandler from "./app/oauth2/OAuth2RedirectHandler";
import ProfileComponent from "./merchant/Profile.component";
import './app/store/middleware/RestMiddleware';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                {/*<UserList/>*/}
                {/*<AuthExample/>*/}
                <ProtectedRoute path="/" exact component={MerchantComponent}/>
                <Route path="/login" exact component={LoginComponent}/>
                <ProtectedRoute path="/profile" exact component={ProfileComponent}/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
