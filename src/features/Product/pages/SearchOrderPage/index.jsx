import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as Actions from '../../../../actions/orderAction';

SearchOrderPage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '55px 55px'
    },
    toolBar: {
        backgroundColor: '#2c2c2c !important',
        width: '350px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '150px',
            '&:focus': {
                width: '200px',
            },
        },
    },
}));

function SearchOrderPage(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [orderCode, setOrderCode] = useState("");
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        let value = { "code": orderCode };
        dispatch(Actions.actionGetOrderByCode(value));
        history.push('/view-order');
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={classes.root}>
                        <form className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onSubmit={handleSearchSubmit}>
                            <h4>Please enter your 'Order code' to view your order</h4>
                            <AppBar position="static" className={classes.toolBar}>
                                <Toolbar className={classes.toolBar}>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon />
                                        </div>
                                        <InputBase
                                            placeholder="Enter order code…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'search' }}
                                            value={orderCode}
                                            onChange={(e) => setOrderCode(e.target.value)}
                                            required
                                        />
                                    </div>
                                </Toolbar>
                            </AppBar>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchOrderPage;