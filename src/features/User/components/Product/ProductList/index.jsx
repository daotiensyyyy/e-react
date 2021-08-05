import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ProductRow from '../ProductRow';
import ReactPaginate from 'react-paginate';


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
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 10;
    const pageVisited = pageNumber * productsPerPage;
    const displayProducts = productList
        .slice(pageVisited, pageVisited + productsPerPage)
        .map(product => {
            return (
                <ProductRow
                    key={product._id}
                    product={product}
                    onHandleClick={onHandleProductEditClick}
                    onHandleDeleteClick={onHandleProductDeleteClick}
                />

            );
        });
    const pageCount = Math.ceil(productList.length / productsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <>
            {displayProducts}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>
    );
}

export default ProductList;