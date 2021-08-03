import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as Actions from '../../../../actions/productActions';
import Table from '../../components/Product/Table';
import { BsFillTrashFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import { IconContext } from 'react-icons/lib';

AdminViewProductPage.propTypes = {

};

function AdminViewProductPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const productList = useSelector(state => state.productList);
    // console.log(productList);
    const { products } = productList;
    useEffect(() => {
        dispatch(Actions.actionAdminFetchAllProducts());
    }, [dispatch]);
    const handleEditClick = (product) => {
        const productUrl = `admin-manage-product/edit/${product._id}`;
        // console.log("productUrl", productUrl);
        history.push(productUrl);
    }

    const handleDeleteClick = (id) => {
        dispatch(Actions.actionAdminDeleteProduct(id));
        history.push('/admin-manage-product/trash');
    }
    return (
        <div className="container">
            <div className="row">
                <h2>Product List</h2>
                <div className="row bin-create-icon">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <IconContext.Provider value={{ color: 'black', size: '25px' }}>
                            <Link to="/admin-manage-product/trash"><BsFillTrashFill /></Link>
                        </IconContext.Provider>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-end">
                        <IconContext.Provider value={{ color: 'black', size: '25px' }}>
                            <Link to="/admin-manage-product/create" alt="Create product"><MdAddBox /></Link>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-product">
                    <Table
                        products={products}
                        onProductEditClick={handleEditClick}
                        onProductDeleteClick={handleDeleteClick}
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <Link className="previous-btn" to="/admin">Back to previous</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminViewProductPage;