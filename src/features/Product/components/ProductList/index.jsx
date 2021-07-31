import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

ProductList.propTypes = {
    productList: PropTypes.array,
    onProductDetailClick: PropTypes.func,
};
ProductList.defaultProps = {
    productList: [],
    onProductDetailClick: null
}
function ProductList(props) {
    const { productList, onProductDetailClick } = props;
    return (
        <>
            {productList.map(product => (
                <div key={product._id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-col">
                    <ProductCard
                        product={product}
                        onDetailClick={onProductDetailClick}
                    />
                </div>
            ))}
        </>
    );
}

export default ProductList;