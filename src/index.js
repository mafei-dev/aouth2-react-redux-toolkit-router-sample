import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import MerchantComponent from "./merchant/Merchant.component";
import {BrowserRouter, Route} from "react-router-dom";
import ProtectedRoute from "./merchant/ProtectedRoute";
import LoginComponent from "./app/oauth2/Login.component";
import OAuth2RedirectHandler from "./app/oauth2/OAuth2RedirectHandler";
import ProfileComponent from "./merchant/Profile.component";
import './app/store/middleware/RestMiddleware';
import Page404Component from "./app/errors/Page404.component";
import {Switch} from "react-router-dom";
import 'react-weui/build/packages/react-weui.css';
import 'weui';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CurrentOrderComponent from "./user/order/CurrentOrder.component";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                    <Route path="/login" exact component={LoginComponent}/>
                    <ProtectedRoute path="/profile" exact component={ProfileComponent}/>
                    <ProtectedRoute path="/order" exact component={CurrentOrderComponent}/>
                    <ProtectedRoute path="/" component={MerchantComponent}/>
                    <Route path="*" component={Page404Component}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
