import React from 'react';

ProductCarousel.propTypes = {

};

function ProductCarousel(props) {
    return (
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 product-carousel">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                            className="d-block w-100" alt="#" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                            className="d-block w-100" alt="#" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media-exp3.licdn.com/dms/image/C4E1BAQEirVNY9qu8yg/company-background_10000/0/1561626599516?e=2159024400&v=beta&t=QlG9HEWE-7OBi8pzxvdi_7U4zZaIAeL2L6QyOsUEe5w"
                            className="d-block w-100" alt="#" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default ProductCarousel;