import PropTypes from 'prop-types';
import React from 'react';

import ProductRow from '../ProductRow';

ProductList.propTypes = {
    productList: PropTypes.array,
    onHandleProductEditClick: PropTypes.func,
    onHandleProductDeleteClick: PropTypes.func,
};

ProductList.defaultProps = {
    productList: [],
    onHandleProductEditClick: null,
    onHandleProductDeleteClick: null,
}

function ProductList(props) {
    const { productList, onHandleProductEditClick, onHandleProductDeleteClick } = props;
    return (
        <>
            {productList.map(product =>
                <ProductRow
                    key={product._id}
                    product={product}
                    onHandleClick={onHandleProductEditClick}
                    onHandleDeleteClick={onHandleProductDeleteClick}
                />
            )
            }

        </>
    );
}

export default ProductList;