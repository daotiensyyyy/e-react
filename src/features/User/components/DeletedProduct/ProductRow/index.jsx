import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { MdRestore } from "react-icons/md";

ProductRow.propTypes = {
    product: PropTypes.object,
    onHandleRestore: PropTypes.func,
};

ProductRow.defaultProps = {
    product: {},
    onHandleRestore: null,
}

function ProductRow(props) {
    const { product, onHandleRestore } = props;

    const handleRestoreClick = () => {
        if (onHandleRestore) {
            onHandleRestore(product._id);
        }
    }

    return (
        <tr>
            <th scope="row">{product._id}</th>
            <td>{product.name}</td>
            <td>{product.categories.map(c => c.name)}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.deletedAt}</td>
            <td>


                <IconContext.Provider value={{ color: 'rgb(160 26 4 / 1)', size: '20px' }}>
                    <MdRestore onClick={handleRestoreClick} />
                </IconContext.Provider>



            </td>
        </tr>
    );
}

export default ProductRow;