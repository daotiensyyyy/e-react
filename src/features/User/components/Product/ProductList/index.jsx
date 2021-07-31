import PropTypes from 'prop-types';
import React from 'react';

import ProductRow from '../ProductRow';

ProductList.propTypes = {
    productList: PropTypes.array,
    onHandleProductEditClick: PropTypes.func,
    onHandleProductRestoreClick: PropTypes.func,
};

ProductList.defaultProps = {
    productList: [],
    onHandleProductEditClick: null,
    onHandleProductRestoreClick: null,
}

function ProductList(props) {
    const { productList, onHandleProductEditClick, onHandleProductRestoreClick } = props;
    return (
        <>
            {productList.map(product =>
                <ProductRow
                    key={product._id}
                    product={product}
                    onHandleClick={onHandleProductEditClick}
                    onHandleRestore={onHandleProductRestoreClick}
                />
            )
            }

        </>
    );
}

export default ProductList;