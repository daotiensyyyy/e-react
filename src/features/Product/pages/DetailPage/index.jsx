import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Actions from '../../../../actions/productActions';
import NavigationBar from '../../components/NavigationBar';
import ProductCarousel from '../../components/ProductCarousel';
import ProductDetail from '../../components/ProductDetail';
// import PropTypes from 'prop-types';
import './DetailPage.scss';

DetailPage.propTypes = {

};

function DetailPage(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { productDetail } = productList;
    // console.log(productDetail);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        // console.log('value: ' + props.match);
        dispatch(Actions.actionFetchProductById(id));
    }, [dispatch, id]);

    const onHandleOrderClick = (product) => {
        const orderURL = `/order/${product._id}`;
        // console.log("product url", orderURL);
        history.push(orderURL);
    }

    return (
        <>
            <div className="container">
                <NavigationBar productDetail={productDetail} />
                <div className="row">
                    <ProductCarousel />
                    <ProductDetail
                        detail={productDetail}
                        onOrderClick={onHandleOrderClick}
                    />
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 description">Description</div>
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti ad tempora officiis possimus
                            repellendus facilis iste iusto pariatur? Ipsum quae veniam officia repellat. Voluptates, velit
                            quibusdam delectus repellat cum ullam dolores vitae maiores. Quam non suscipit blanditiis quia
                            placeat laborum temporibus exercitationem itaque est iste? Aperiam praesentium laborum soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti ad tempora officiis possimus
                            repellendus facilis iste iusto pariatur? Ipsum quae veniam officia repellat. Voluptates, velit
                            quibusdam delectus repellat cum ullam dolores vitae maiores. Quam non suscipit blanditiis quia
                            placeat laborum temporibus exercitationem itaque est iste? Aperiam praesentium laborum soluta.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 previous-btn-row">
                        <Link className="previous-btn" to="/products">Back to previous</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailPage;