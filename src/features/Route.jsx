import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

import MainPage from './Product/pages/MainPage';
import ProductPage from './Product/pages/ProductPage';
import DetailPage from './Product/pages/DetailPage';
import OrderPage from './Product/pages/OrderPage';
import ViewOrderPage from './Product/pages/ViewOrderPage';
import SearchOrderPage from './Product/pages/SearchOrderPage';
import LoginPage from './Share/pages/LoginPage';

import PrivateRoute from '../components/PrivateRoute';
import AdminViewUserPage from './User/pages/AdminViewUserPage';
import AdminEditUserPage from './User/pages/AdminEditUserPage';
import AdminViewProductPage from './User/pages/AdminViewProductPage';
import AdminEditProductPage from './User/pages/AdminEditProductPage';
import AdminViewDeletedProductPage from './User/pages/AdminViewDeletedProductPage';

const User = React.lazy(() => import('../features/User'));

Routes.propTypes = {

};

function Routes(props) {
    const match = useRouteMatch();
    // console.log('match', match);
    // console.log(match.url + '/details');
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}products`} component={ProductPage} />
            <Route path={`${match.url}product/details/:id`} component={DetailPage} />
            <Route path={`${match.url}order/:id`} component={OrderPage} />
            <Route path={`${match.url}view-order`} component={ViewOrderPage} />
            <Route path={`${match.url}search-order`} component={SearchOrderPage} />
            <Route path={`${match.url}login`} component={LoginPage} />

            <PrivateRoute exact path={`${match.url}admin`} component={User} />
            <PrivateRoute exact path={`${match.url}admin-manage-user`} component={AdminViewUserPage} />
            <PrivateRoute exact path={`${match.url}admin-manage-user/edit/:id`} component={AdminEditUserPage} />
            <PrivateRoute exact path={`${match.url}admin-manage-product`} component={AdminViewProductPage} />
            <PrivateRoute exact path={`${match.url}admin-manage-product/edit/:id`} component={AdminEditProductPage} />
            <PrivateRoute exact path={`${match.url}admin-manage-product/trash`} component={AdminViewDeletedProductPage} />

        </Switch>
    );
}

export default Routes;
