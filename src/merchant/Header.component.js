import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                </nav>
            </div>
        );
    }
}

HeaderComponent.propTypes = {};

export default HeaderComponent;