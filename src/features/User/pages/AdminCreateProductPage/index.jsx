import { Button, FormControl, InputLabel, makeStyles, Select, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import * as Actions from '../../../../actions/productActions';

AdminCreateProductPage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '50%',

        },
    },
    formControl: {
        margin: theme.spacing(1),
        width: '50%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function AdminCreateProductPage(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = {
        "name": "",
        "price": 0,
        "description": "",
        "categories": "",
        "image": null,
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),
        price: Yup.number().min(1, 'This can not be set as 0').required('This field is required'),
        description: Yup.string().required('This field is required'),
        categories: Yup.string().required('This field is required'),
    });

    return (
        <>
            <div className="container">
                <h2 className="text-center">Create product</h2>
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                dispatch(Actions.actionAdminCreateProduct(values));
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
                                setFieldValue,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            } = formikProps;

                            // console.log({ values, errors, touched, isSubmitting });

                            return (
                                <Form
                                    className={`${classes.root} text-center`}
                                    onSubmit={handleSubmit}
                                    encType="multipart/form-data"
                                >
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
                                            value={values.price}
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
                                        {errors.description && touched.description && (
                                            <p>{errors.description}</p>
                                        )}
                                    </div>
                                    <div>
                                        <FormControl variant="filled" className={classes.formControl}>
                                            <InputLabel htmlFor="filled-category-native-simple">Category</InputLabel>
                                            <Select
                                                native
                                                value={values.categories}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'categories',
                                                    id: 'filled-categories-native-simple',
                                                }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={"mobile"}>Mobile</option>
                                                <option value={"laptop"}>Laptop</option>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div>
                                        <input id="image" type="file" name="image" className="file_input"
                                            onChange={(event) => {
                                                setFieldValue("image", event.currentTarget.files[0]);
                                            }} />
                                    </div>
                                    <div >
                                        <Button
                                            disabled={isSubmitting}
                                            variant="contained"
                                            color="secondary"
                                            type="submit"
                                        >
                                            Create
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

export default AdminCreateProductPage;