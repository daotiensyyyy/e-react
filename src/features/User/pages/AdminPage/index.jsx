import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminPage.scss';

AdminPage.propTypes = {

};

function AdminPage(props) {
    // toast.success("Login successful!")

    return (
        <>
            <ToastContainer />
            <div className="container">
                <h1 className="text-center">Welcome Admin</h1>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row ">
                        <ul className="list">
                            <li><Link to="/admin-manage-user">Manage users</Link></li>
                            <li><Link to="/admin-manage-product">Manage products</Link></li>
                            <li>Manage order</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPage;