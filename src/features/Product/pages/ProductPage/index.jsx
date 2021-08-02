import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as Actions from '../../../../actions/productActions';
import CategoryBar from '../../components/CategoryBar';
import NavigationBar from '../../components/NavigationBar';
import ProductList from '../../components/ProductList';
// import PropTypes from 'prop-types';
import './ProductPage.scss';

ProductPage.propTypes = {

};

function ProductPage(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    console.log(productList);
    const { products } = productList;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    useEffect(() => {
        dispatch(Actions.actionFetchAllProducts());
    }, [dispatch]);
    const handleDetailClick = (product) => {
        const productUrl = `product/details/${product._id}`;
        // console.log("product url", productUrl);
        history.push(productUrl);
    }
    return (
        <>
            <div className="container product-container">
                <NavigationBar />
                <div className="row">
                    <CategoryBar />
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 product-list">
                        <div className="titlepage">
                            <h2> Our <strong className="llow">products</strong> </h2>
                        </div>
                        <div className="row">
                            <ProductList
                                productList={products}
                                onProductDetailClick={handleDetailClick}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 previous-btn-row">
                        <Link className="previous-btn" to="/">Back to previous</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;