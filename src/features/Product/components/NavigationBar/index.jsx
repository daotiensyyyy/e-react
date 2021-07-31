import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';

NavigationBar.propTypes = {
    productDetail: PropTypes.object,
};

NavigationBar.defaultProps = {
    productDetail: {}
}

function NavigationBar(props) {
    const { productDetail } = props;
    return (
        <div className="row navigation-bar">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <ul>
                    <li><Link to="/">Home /</Link></li>
                    <li><Link to="/products"> Products /</Link></li>
                    <li> {productDetail ? productDetail.name : ' '} </li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationBar;