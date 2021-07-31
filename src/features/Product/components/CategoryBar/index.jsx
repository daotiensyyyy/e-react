import React from 'react';

CategoryBar.propTypes = {

};

function CategoryBar(props) {
    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 category">
            <ul className="categories">
                <li>Categories</li>
            </ul>
            <ul className="categories-item">
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
            </ul>
        </div>
    );
}

export default CategoryBar;