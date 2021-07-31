import { Button, makeStyles, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import * as Actions from '../../../../actions/productActions';

AdminEditProductPage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '50%',

        },
    },
}));

function AdminEditProductPage(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const productList = useSelector(state => state.productList);
    const { productDetail } = productList;
    console.log('product', productDetail);

    useEffect(() => {
        dispatch(Actions.actionAdminFetchProductById(id));
    }, [dispatch, id]);

    const initialValues = {
        "_id": id,
        "name": "",
        "price": 0,
        "description": "",
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),
        price: Yup.number().min(1, 'This can not be set as 0').required('This field is required'),
    });

    return (
        <>
            <ToastContainer />
            <div className="container">
                <h2 className="text-center">Edit product</h2>
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                dispatch(Actions.actionAdminEditProduct(id, values));
                                history.push('/admin-manage-product');
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

                            // console.log({ values, errors, touched, isSubmitting });

                            return (
                                <Form className={`${classes.root} text-center`} onSubmit={handleSubmit}>
                                    <div>
                                        <TextField
                                            id="filled-basic"
                                            name="_id"
                                            label="Product id"
                                            variant="filled"
                                            value={values._id}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="filled-basic"
                                            name="name"
                                            label="Product name"
                                            variant="filled"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name && (
                                            <p>{errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <TextField
                                            id="filled-basic"
                                            name="price"
                                            label="Product price"
                                            variant="filled"
                                            value={values.price || ''}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.price && touched.price && (
                                            <p>{errors.price}</p>
                                        )}
                                    </div>
                                    <div>
                                        <TextField
                                            id="filled-basic"
                                            name="description"
                                            label="Product description"
                                            variant="filled"
                                            value={values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div >
                                        <Button
                                            disabled={isSubmitting}
                                            variant="contained"
                                            color="secondary"
                                            type="submit"
                                        >
                                            Update
                                        </Button>
                                    </div>
                                </Form>
                            )
                        }}


                    </Formik>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <Link className="previous-btn" to="/admin-manage-product">Back to previous</Link>
                </div>
            </div>
        </>
    );
}

export default AdminEditProductPage;