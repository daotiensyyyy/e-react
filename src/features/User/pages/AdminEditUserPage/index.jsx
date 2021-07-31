import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as Actions from '../../../../actions/userActions';

AdminEditUserPage.propTypes = {

};

function AdminEditUserPage(props) {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList);
    const { userDetails } = userList;
    console.log(userDetails);
    const { id } = useParams();
    useEffect(() => {
        dispatch(Actions.actionFetchUserById(id));
    }, [dispatch, id]);

    return (
        <div className="container">
            <h2>Edit user</h2>
            <div>
                <Formik
                // initialValues={initialValues}
                // validationSchema={validationSchema}
                // onSubmit={(values, { setSubmitting }) => {
                //     setTimeout(() => {
                //         dispatch(Actions.actionPlaceOrderRequest(values));
                //         history.push('/products');
                //         setSubmitting(false);
                //     }, 1000);
                // }}
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

                        console.log({ values, errors, touched, isSubmitting });

                        return (
                            <Form className="" onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="">label for input:</label>
                                    <input
                                        // value={values.customerName || ''}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.customerName && touched.customerName && (
                                        <p>{errors.customerName}</p>
                                    )}</div>
                                <div>
                                    <label htmlFor="">label for input:</label>
                                    <input
                                        // value={values.customerEmail || ''}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.customerEmail && touched.customerEmail && (
                                        <p>{errors.customerEmail}</p>
                                    )}</div>
                                <div>
                                    <label htmlFor="">label for input:</label>
                                    <input
                                        // value={values.customerAddress || ''}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.customerAddress && touched.customerAddress && (
                                        <p>{errors.customerAddress}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="">label for input:</label>
                                    <input
                                        // value={values.customerPhone || ''}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.customerPhone && touched.customerPhone && (
                                        <p>{errors.customerPhone}</p>
                                    )}</div>
                                <div>
                                    <label htmlFor="">label for input:</label>
                                    <input
                                        // value={values.qty || ''}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.qty && touched.qty && (
                                        <p>{errors.qty}</p>
                                    )}
                                </div>

                                <div>
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
                <Link className="previous-btn" to="/admin-manage-user">Back to previous</Link>
            </div>
        </div>
    );
}

export default AdminEditUserPage;