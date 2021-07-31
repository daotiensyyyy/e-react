import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

FormOrder.propTypes = {
    classes: PropTypes.func,
    onSubmit: PropTypes.func,
};

FormOrder.defaultProps = {
    classes: null,
    onSubmit: null
}

function FormOrder(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [district, setDistrict] = useState("");
    const [qty, setQty] = useState("");

    const { classes, onSubmit } = props;


    return (
        <>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div className="wrapper">
                    <div>
                        <h3>Customer's information</h3>
                    </div>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                        onSubmit={onSubmit}
                    >

                        <div>
                            <TextField
                                id="standard-required"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="standard-required"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="standard-required"
                                label="Address"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <TextField
                                id="standard-required"
                                label="Quantity"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-light">Order</button>
                        </div>

                    </form>
                </div></div>
        </>
    );
}

export default FormOrder;