import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../ProductList';

Table.propTypes = {
    products: PropTypes.array,
    onProductEditClick: PropTypes.func,
    onProductDeleteClick: PropTypes.func,
};

Table.defaultProps = {
    products: [],
    onProductEditClick: null,
    onProductDeleteClick: null,
}

function Table(props) {
    const { products, onProductEditClick, onProductDeleteClick } = props;
    return (
        <>
            <table className="table col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Active</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <ProductList
                        productList={products}
                        onHandleProductEditClick={onProductEditClick}
                        onHandleProductDeleteClick={onProductDeleteClick}
                    />
                </tbody>
            </table>
        </>
    );
}

export default Table;