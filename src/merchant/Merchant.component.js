import React from 'react';
import BodyComponent from "./Body.component";
import HeaderComponent from "./Header.component";
import SideBarComponent from "./SideBar.component";
import BottomNavigation from "./BottomNavigation.component";
import BottomNavigationComponent from "./BottomNavigation.component";

const MerchantComponent = () => {

    return (

        <div>
            <HeaderComponent/>
            <div className="container">
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <BodyComponent/>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
            <BottomNavigationComponent/>
        </div>
    );
}

export default MerchantComponent;

