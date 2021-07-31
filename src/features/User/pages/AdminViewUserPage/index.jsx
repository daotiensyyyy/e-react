import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as Actions from '../../../../actions/userActions';
import Table from '../../components/User/Table';

AdminViewUserPage.propTypes = {

};

function AdminViewUserPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userList = useSelector(state => state.userList);
    // console.log(userList);
    const { users } = userList;
    useEffect(() => {
        dispatch(Actions.actionFetchAllUsers());
    }, [dispatch]);
    const handleEditClick = (users) => {
        const userUrl = `admin-manage-user/edit/${users._id}`;
        console.log("userUrl", userUrl);
        history.push(userUrl);
    }
    return (
        <div className="container">
            <div className="row">
                <h2>User List</h2>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Table
                        users={users}
                        onUserEditClick={handleEditClick}
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <Link className="previous-btn" to="/admin">Back to previous</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminViewUserPage;