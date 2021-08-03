import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import * as Actions from '../../../../actions/userActions';
import './LoginPage.scss';


LoginPage.propTypes = {

};

function LoginPage(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is required'),
        password: Yup.string().required("This field is required!"),
    });
    return (
        <>
            <div className="container form-container">
                <div className="row">
                    <div className="wrapper">
                        <Formik
                            initialValues={{ username: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    dispatch(Actions.actionLoginRequest(values));
                                    history.push('/');
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
                                    <Form className="form col-sm-12 col-xs-12" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <TextField
                                                id="filled-basic username"
                                                name="username"
                                                label="username"
                                                variant="filled"
                                                value={values.username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.username && touched.username && (
                                                <p>{errors.username}</p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <TextField
                                                id="filled-basic password"
                                                name="password"
                                                label="password"
                                                variant="filled"
                                                type="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.password && touched.password && (
                                                <p>{errors.password}</p>
                                            )}
                                        </div>
                                        <Button
                                            disabled={isSubmitting}
                                            variant="contained"
                                            color="secondary"
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;