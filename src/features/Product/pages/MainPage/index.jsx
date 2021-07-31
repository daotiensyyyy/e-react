import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';

MainPage.propTypes = {

};



function MainPage(props) {
    // const productList = useSelector(state => state.productList);
    // console.log(productList);
    // const { products } = productList;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    // useEffect(() => {
    //     dispatch(getProducts());
    // }, [dispatch]);
    return (
        <>
            <Banner />
            <div className="container">
                {/* NEW PRODUCT */}
                <div className="new-product">
                    <div className="titlepage">
                        <h2> New <strong className="llow">arrivals</strong> </h2>
                    </div>

                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-carousel">
                                        <div className="card mt-4">
                                            <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                                                className="card-img-top" alt="#" />
                                            <div className="card-body">
                                                <h5 className="card-title">Product name</h5>
                                                <p className="card-text">250.000vnd</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-carousel">
                                        <div className="card mt-4">
                                            <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                                                className="card-img-top" alt="#" />
                                            <div className="card-body">
                                                <h5 className="card-title">Product name</h5>
                                                <p className="card-text">250.000vnd</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-carousel">
                                        <div className="card mt-4">
                                            <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                                                className="card-img-top" alt="#" />
                                            <div className="card-body">
                                                <h5 className="card-title">Product name</h5>
                                                <p className="card-text">250.000vnd</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-carousel">
                                        <div className="card mt-4">
                                            <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                                                className="card-img-top" alt="#" />
                                            <div className="card-body">
                                                <h5 className="card-title">Product name</h5>
                                                <p className="card-text">250.000vnd</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-carousel">
                                        <div className="card mt-4">
                                            <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                                                className="card-img-top" alt="#" />
                                            <div className="card-body">
                                                <h5 className="card-title">Product name</h5>
                                                <p className="card-text">250.000vnd</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-list-carousel">
                                        <div className="card mt-4">
                                            <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                                                className="card-img-top" alt="#" />
                                            <div className="card-body">
                                                <h5 className="card-title">Product name</h5>
                                                <p className="card-text">250.000vnd</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* END NEW PRODUCT */}

                {/* ALL PRODUCT */}
                {/* <div className="all-products">
                    <div className="titlepage">
                        <h2> Our <strong className="llow">products</strong> </h2>
                    </div>
                    <div className="row product-list">
                        <ProductList productList={products} />
                    </div>
                </div> */}
                {/* END ALL PRODUCT */}

                <div className="view-more text-center">
                    <Link to="/products" className="btn btn-light">View more </Link>
                </div>
            </div>
        </>
    );
}

export default MainPage;