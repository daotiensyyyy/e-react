import React from 'react';
import PropTypes from 'prop-types';

ProductOrder.propTypes = {
    orderedProduct: PropTypes.object,
};

ProductOrder.defaultProps = {
    orderedProduct: {}
}

function ProductOrder(props) {
    const { orderedProduct } = props;
    // console.log('orderedProduct', orderedProduct);
    return (
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="product-image">
                <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w" alt="/#" />
            </div>
            <div className="product-detail">
                <h3>Product's information:</h3>
                <div className="product-detail__code">
                    Code: {orderedProduct._id}
                </div>
                <div className="product-detail__name">
                    Name: {orderedProduct.name}
                </div>
                <div className="product-detail__price">
                    Price: {orderedProduct.price}
                </div>
                <div className="product-detail__description">
                    Description: {orderedProduct.description}
                </div>
                <div className="product-detail__category">
                    Category: {orderedProduct.categories.map(category => category.name)}
                </div>
            </div>
        </div>
    );
}

export default ProductOrder;