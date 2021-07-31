import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => {
    if (localStorage.getItem('accessToken')) {
        return true;
    }
    return false;
}

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/admin" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;