import PropTypes from 'prop-types';
import React from 'react';

import ProductRow from '../ProductRow';

ProductList.propTypes = {
    productList: PropTypes.array,
    onHandleProductRestoreClick: PropTypes.func,
};

ProductList.defaultProps = {
    productList: [],
    onHandleProductRestoreClick: null,
}

function ProductList(props) {
    const { productList, onHandleProductRestoreClick } = props;
    return (
        <>
            {productList.map(product =>
                <ProductRow
                    key={product._id}
                    product={product}
                    onHandleRestore={onHandleProductRestoreClick}
                />
            )
            }

        </>
    );
}

export default ProductList;