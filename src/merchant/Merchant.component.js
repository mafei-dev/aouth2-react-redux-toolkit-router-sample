import React from 'react';
import BodyComponent from "./Body.component";
import HeaderComponent from "./Header.component";
import SideBarComponent from "./SideBar.component";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";

const MerchantComponent = () => {

    return (
        <div>

            <HeaderComponent/>
            <div className="container">
                <div className="row">
                    <div className="col-8" style={{backgroundColor: "#6610f2"}}>
                        <SideBarComponent/>
                    </div>
                    <div className="col-4" style={{backgroundColor: "#28a745"}}>
                        <BodyComponent/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MerchantComponent;

