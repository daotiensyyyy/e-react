import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { MdCheckBox, MdDelete, MdEdit } from "react-icons/md";

ProductRow.propTypes = {
    product: PropTypes.object,
    onHandleClick: PropTypes.func,
    onHandleDeleteClick: PropTypes.func,
};

ProductRow.defaultProps = {
    product: {},
    onHandleClick: null,
    onHandleDeleteClick: null,
}

function ProductRow(props) {
    const { product, onHandleClick, onHandleDeleteClick } = props;
    const handleEditClick = () => {
        if (onHandleClick) {
            onHandleClick(product);
        }
    }
    const handleDeleteClick = () => {
        if (onHandleDeleteClick) {
            onHandleDeleteClick(product._id);
        }
    }



    return (
        <tr>
            <th scope="row">{product._id}</th>
            <td>{product.name}</td>
            {/* <td>{product.categories.map(c => c.name)}</td> */}
            <td>{product.price}</td>
            <td>{product.description}</td>
            <IconContext.Provider value={{ color: '#2c873d', size: '20px' }}>
                <td>{product.deleted ? '' : <MdCheckBox />}</td>
            </IconContext.Provider>

            <td>

                <IconContext.Provider value={{ color: 'rgb(160 26 4 / 1)', size: '20px' }}>
                    <MdEdit onClick={handleEditClick} />
                    <MdDelete onClick={handleDeleteClick} />
                </IconContext.Provider>

            </td>
        </tr>
    );
}

export default ProductRow;