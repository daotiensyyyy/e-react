import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as Actions from '../../../../actions/productActions';
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';
import Table from '../../components/DeletedProduct/Table';

AdminViewDeletedProductPage.propTypes = {

};

function AdminViewDeletedProductPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const productList = useSelector(state => state.productList);
    // console.log(productList);
    const { deleted } = productList;
    useEffect(() => {
        dispatch(Actions.actionAdminFetchDeletedProducts());
    }, [dispatch]);

    const handleRestoreClick = (id) => {
        dispatch(Actions.actionAdminRestoreProduct(id));
        history.push('/admin-manage-product');
    }
    return (
        <div className="container">
            <div className="row">
                <h2>Deleted products</h2>
                <div className="icon-back">
                    <IconContext.Provider value={{ color: 'black', size: '25px' }}>
                        <Link to="/admin-manage-product"><BsArrowLeft /></Link>
                    </IconContext.Provider>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-deleted-product">
                    <Table
                        products={deleted}
                        onProductRestoreClick={handleRestoreClick}
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <Link className="previous-btn" to="/admin-manage-product">Back to previous</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminViewDeletedProductPage;