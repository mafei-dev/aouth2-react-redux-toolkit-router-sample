import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class SideBarComponent extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>Tab1</Link>
                <br/>
                <Link to={'/t2'}>Tab2</Link>
                <br/>
                <Link to={'/t3'}>Tab3</Link>
            </div>
        );
    }
}

SideBarComponent.propTypes = {};

export default SideBarComponent;