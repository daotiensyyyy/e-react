import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
ViewOrderPage.propTypes = {

};

function ViewOrderPage(props) {
    const orderList = useSelector(state => state.orderList);
    const { orderDetail } = orderList;
    // console.log(orderDetail);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 order">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="order-code">
                                    Order code: {orderDetail.code}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="order-customer__name">
                                    Name: {orderDetail.billingAddress.name}
                                </div>
                                <div className="order-customer__email">
                                    Email: {orderDetail.billingAddress.email}
                                </div>
                                <div className="order-customer__address">
                                    Address: {orderDetail.billingAddress.address}
                                </div>
                                <div className="order-customer__phone">
                                    Phone: {orderDetail.billingAddress.phone}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="order-ship">
                                    Ship method: {orderDetail.shippingMethod}
                                </div>
                                <div className="order-pay">
                                    Pay method: {orderDetail.paymentMethod}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <div className="order-product__id">
                                    Product code: {orderDetail.items.map(item => item.productId)}
                                </div>
                                <div className="order-product__name">
                                    Product name: {orderDetail.items.map(item => item.name)}
                                </div>
                                <div className="order-product__price">
                                    Product price: {orderDetail.items.map(item => item.price)}
                                </div>
                                <div className="order-product__qty">
                                    Quantity: {orderDetail.items.map(item => item.qty)}
                                </div>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="order-grand-total">
                                    Total price: {orderDetail.grandTotal}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 previous-btn-row">
                                <Link className="previous-btn" to="/search-order">Back to previous</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewOrderPage;