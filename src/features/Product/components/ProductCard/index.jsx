import React from 'react';
import PropTypes from 'prop-types';

ProductCard.propTypes = {
    product: PropTypes.object,
    onDetailClick: PropTypes.func,
};

ProductCard.defaultProps = {
    product: {},
    onDetailClick: null,
}

function ProductCard(props) {
    const { product, onDetailClick } = props;
    const handleDetailClick = () => {
        if (onDetailClick) {
            onDetailClick(product);
        }
    }
    return (
        <>
            <div className="card mt-4" onClick={handleDetailClick}>
                <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                    className="card-img-top" alt="#" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{`${product.price}.000VND`}</p>

                </div>
            </div>
        </>
    );
}

export default ProductCard;