import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as Yup from 'yup';
import * as Actions from '../../../../actions/orderAction';
import * as ProductActions from '../../../../actions/productActions';
import ProductOrder from '../../components/ProductOrder';
import './OrderPage.scss';

OrderPage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '50%',
        },
    },
}));

const generateCode = () => {
    let number = Math.floor(100000000 + Math.random() * 900000000);
    return 'ORD' + number;
}

function OrderPage(props) {
    const code = generateCode();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const productList = useSelector(state => state.productList);
    const { productDetail } = productList;
    const { id } = useParams();
    useEffect(() => {
        dispatch(ProductActions.actionFetchProductById(id));
    }, [dispatch, id]);

    const initialValues = {
        "code": code,
        "customerName": "",
        "customerEmail": "",
        "customerAddress": "",
        "customerPhone": "",
        "shippingMethod": "COD",
        "paymentMethod": "COD",
        "items": [
            {
                "productId": productDetail._id,
                "name": productDetail.name,
                "price": productDetail.price,
                "qty": 1
            }
        ]
    }

    const validationSchema = Yup.object().shape({
        customerName: Yup.string().required('This field is required'),
        customerEmail: Yup.string().email('Invalid email format').required('This field is required'),
        customerAddress: Yup.string().required('This field is required'),
        customerPhone: Yup.string().required('This field is required'),
        // qty: Yup.number().min(1, 'Minimum 1').required('This field is required'),
    });
    return (
        <>
            <div className="container">
                <div className="row">
                    <ProductOrder
                        orderedProduct={productDetail}
                    />

                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div className="wrapper">
                            <div>
                                <h3>Customer's information</h3>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        dispatch(Actions.actionPlaceOrderRequest(values));
                                        history.push('/products');
                                        setSubmitting(false);
                                    }, 1000);
                                }}
                            >
                                {formikProps => {
                                    const {
                                        values,
                                        touched,
                                        errors,
                                        isSubmitting,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit
                                    } = formikProps;


                                    // console.log(formikProps.values.items);
                                    // console.log({ values, errors, touched, isSubmitting });
                                    return (
                                        <Form className={classes.root} onSubmit={handleSubmit}>
                                            <TextField
                                                id="filled-basic"
                                                name="customerName"
                                                label="name"
                                                variant="filled"
                                                value={values.customerName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.customerName && touched.customerName && (
                                                <p>{errors.customerName}</p>
                                            )}
                                            <TextField
                                                id="filled-basic"
                                                name="customerEmail"
                                                label="email"
                                                variant="filled"
                                                value={values.customerEmail}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.customerEmail && touched.customerEmail && (
                                                <p>{errors.customerEmail}</p>
                                            )}
                                            <TextField
                                                id="filled-basic"
                                                name="customerAddress"
                                                label="address"
                                                variant="filled"
                                                value={values.customerAddress}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.customerAddress && touched.customerAddress && (
                                                <p>{errors.customerAddress}</p>
                                            )}
                                            <TextField
                                                id="filled-basic"
                                                name="customerPhone"
                                                label="phone"
                                                variant="filled"
                                                value={values.customerPhone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.customerPhone && touched.customerPhone && (
                                                <p>{errors.customerPhone}</p>
                                            )}
                                            {values.items.map((item, index) =>
                                                <TextField
                                                    key={index}
                                                    id="filled-basic"
                                                    type="number"
                                                    name={`item[${index}].qty`}
                                                    label="qty"
                                                    variant="filled"
                                                    value={values.items.qty}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            )}
                                            {errors.qty && touched.qty && (
                                                <p>{errors.qty}</p>
                                            )}
                                            <div>
                                                <Button
                                                    disabled={isSubmitting}
                                                    variant="contained"
                                                    color="secondary"
                                                    type="submit"
                                                >
                                                    Order
                                                </Button>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderPage;