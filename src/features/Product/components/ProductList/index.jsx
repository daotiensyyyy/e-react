import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import ReactPaginate from 'react-paginate';
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
    console.log('Products', productList);
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 9;
    const pageVisited = pageNumber * productsPerPage;
    const displayProducts = productList
        .slice(pageVisited, pageVisited + productsPerPage)
        .map(product => {
            return (
                <div key={product._id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-col">
                    <ProductCard
                        product={product}
                        onDetailClick={onProductDetailClick}
                    />
                </div>
            );
        });
    const pageCount = Math.ceil(productList.length / productsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <>
            {/* {productList.map(product => (
                <div key={product._id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-col">
                    <ProductCard
                        product={product}
                        onDetailClick={onProductDetailClick}
                    />
                </div>
            ))} */}
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