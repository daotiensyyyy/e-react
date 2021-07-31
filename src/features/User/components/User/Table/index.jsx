import React from 'react';
import PropTypes from 'prop-types';
import UserList from '../UserList';

Table.propTypes = {
    users: PropTypes.array,
    onUserEditClick: PropTypes.func,
};

Table.defaultProps = {
    users: [],
    onUserEditClick: null
}

function Table(props) {
    const { users, onUserEditClick } = props;
    return (
        <>
            <table className="table col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th scope="col">Active</th>
                        <th scope="col">Deleted at</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <UserList
                        userList={users}
                        onHandleUserEditClick={onUserEditClick}
                    />
                </tbody>
            </table>
        </>
    );
}

export default Table;