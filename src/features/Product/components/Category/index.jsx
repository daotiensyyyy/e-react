import React from 'react';
import PropTypes from 'prop-types';

Category.propTypes = {
    category: PropTypes.object,
    onCategoryClick: PropTypes.func,
};

Category.defaultProps = {
    category: {},
    onCategoryClick: null,
}

function Category(props) {
    const { category, onCategoryClick } = props;
    const handleCategoryClick = () => {
        if (onCategoryClick)
            onCategoryClick(category);
    }
    return (
        <li onClick={handleCategoryClick}>
            {category.name}
        </li>
    );
}

export default Category;