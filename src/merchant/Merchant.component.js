import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BodyComponent from "./Body.component";
import HeaderComponent from "./Header.component";
import SideBarComponent from "./SideBar.component";

class MerchantComponent extends Component {
    render() {
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
}

MerchantComponent.propTypes = {};

export default MerchantComponent;