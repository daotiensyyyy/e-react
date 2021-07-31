import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { MdCheckBox, MdDelete, MdEdit, MdRestore } from "react-icons/md";

ProductRow.propTypes = {
    product: PropTypes.object,
    onHandleClick: PropTypes.func,
    onHandleRestore: PropTypes.func,
};

ProductRow.defaultProps = {
    product: {},
    onHandleClick: null,
    onHandleRestore: null,
}

function ProductRow(props) {
    const { product, onHandleClick, onHandleRestore } = props;
    const handleEditClick = () => {
        if (onHandleClick) {
            onHandleClick(product);
        }
    }

    const handleRestoreClick = () => {
        if (onHandleRestore) {
            onHandleRestore(product);
        }
    }

    return (
        <tr>
            <th scope="row">{product._id}</th>
            <td>{product.name}</td>
            <td>{product.categories.map(c => c.name)}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <IconContext.Provider value={{ color: '#2c873d', size: '20px' }}>
                <td>{product.deleted ? '' : <MdCheckBox />}</td>
            </IconContext.Provider>
            <td>{product.deletedAt}</td>
            <td>
                {product.deleted
                    ?
                    <IconContext.Provider value={{ color: 'rgb(160 26 4 / 1)', size: '20px' }}>
                        <MdRestore onClick={handleRestoreClick} />
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

export default ProductRow;