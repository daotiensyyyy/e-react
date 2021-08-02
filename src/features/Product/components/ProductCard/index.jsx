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
    const srcImage = "http://localhost:3000/" + product.image;
    return (
        <>
            <div className="card mt-4" onClick={handleDetailClick}>
                <img src={srcImage}
                    className="card-img-top" alt="#" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text price">{`${product.price}VND`}</p>

                </div>
            </div>
        </>
    );
}

export default ProductCard;