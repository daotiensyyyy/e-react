import PropTypes from 'prop-types';
import React from 'react';

import UserRow from '../UserRow';

UserList.propTypes = {
    userList: PropTypes.array,
    onHandleUserEditClick: PropTypes.func,
};

UserList.defaultProps = {
    userList: [],
    onHandleUserEditClick: null
}

function UserList(props) {
    const { userList, onHandleUserEditClick } = props;
    return (
        <>
            {userList.map(user =>
                <UserRow
                    key={user._id}
                    user={user}
                    onHandleClick={onHandleUserEditClick}
                />
            )
            }

        </>
    );
}

export default UserList;