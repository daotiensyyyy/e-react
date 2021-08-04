import PropTypes from 'prop-types';
import React from 'react';

ProductDetail.propTypes = {
    detail: PropTypes.object,
    onOrderClick: PropTypes.func,
};

ProductDetail.defaultProps = {
    detail: {},
    onOrderClick: null
}

function ProductDetail(props) {
    const { detail, onOrderClick } = props;
    console.log('detail', detail);
    const handleOrderClick = () => {
        if (onOrderClick) {
            onOrderClick(detail);
        }
    }
    return (
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 product-detail">
            <div className="product-id">Code: {detail ? detail._id : ''}</div>
            <div className="product-name">{detail ? detail.name : ''}</div>
            <hr className="hr-price" />
            <div className="product-price">
                <h3>{detail ? detail.price : ''}vnd</h3>
            </div>
            <hr className="hr-price" />
            <div className="product-description">
                {detail ? detail.description : ''}
            </div>
            <div className="product-category">Category: {detail ? detail.categories.map(category => category.name) : ''}</div>
            <div className=" btn-order">
                <button
                    className="btn btn-danger"
                    onClick={handleOrderClick}
                >Order</button>
            </div>
        </div>
    );
}

export default ProductDetail;