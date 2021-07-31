import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { MdCheckBox, MdDelete, MdEdit, MdRestore } from "react-icons/md";

UserRow.propTypes = {
    user: PropTypes.object,
    onHandleClick: PropTypes.func,
};

UserRow.defaultProps = {
    user: {},
    onHandleClick: null
}

function UserRow(props) {
    const { user, onHandleClick } = props;
    const handleEditClick = () => {
        if (onHandleClick) {
            onHandleClick(user);
        }
    }

    return (
        <tr>
            <th scope="row">{user._id}</th>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.roles.map(role => role.name)}</td>
            <IconContext.Provider value={{ color: '#2c873d', size: '20px' }}>
                <td>{user.deleted ? '' : <MdCheckBox />}</td>
            </IconContext.Provider>
            <td>{user.deletedAt}</td>
            <td>
                {user.deleted
                    ?
                    <IconContext.Provider value={{ color: 'rgb(160 26 4 / 1)', size: '20px' }}>
                        <MdRestore />
                    </IconContext.Provider>
                    :
                    <IconContext.Provider value={{ color: 'rgb(160 26 4 / 1)', size: '20px' }}>
                        <MdEdit onClick={handleEditClick} />
                        <MdDelete />
                    </IconContext.Provider>}

            </td>
        </tr>
    );
}

export default UserRow;