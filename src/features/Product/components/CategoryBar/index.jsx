import React from 'react';
import PropTypes from 'prop-types';
import Category from '../Category';

CategoryBar.propTypes = {
    categories: PropTypes.array,
    onHandleLoadProductsClick: PropTypes.func,
    onHandleLoadAll: PropTypes.func,
};

CategoryBar.defaultProps = {
    categories: [],
    onHandleLoadProductsClick: null,
    onHandleLoadAll: null
}

function CategoryBar(props) {
    const { categories, onHandleLoadProductsClick, onHandleLoadAll } = props;

    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 category">
                <ul className="categories">
                    <li>Categories</li>
                </ul>
                <ul className="categories-item">
                    <li onClick={onHandleLoadAll}>All</li>

                    {categories.map(category =>
                        <Category
                            key={category._id}
                            category={category}
                            onCategoryClick={onHandleLoadProductsClick}
                        />
                    )}
                </ul>
            </div>
        </>
    );
}

export default CategoryBar;