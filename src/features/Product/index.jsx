// import React from 'react';
// import { Route, Switch, useRouteMatch } from 'react-router';
// import AdminPage from '../User/pages/AdminPage';
// import LoginPage from './pages/LoginPage';
// import AdminViewUserPage from '../User/pages/AdminViewUserPage';
// import DetailPage from './pages/DetailPage';
// import MainPage from './pages/MainPage';
// import OrderPage from './pages/OrderPage';
// import ProductPage from './pages/ProductPage';
// import SearchOrderPage from './pages/SearchOrderPage';
// import ViewOrderPage from './pages/ViewOrderPage';

// Product.propTypes = {

// };

// function Product(props) {
//     const match = useRouteMatch();
//     // console.log('match', match);
//     // console.log(match.url + '/details');
//     return (
//         <Switch>
//             <Route exact path={match.url} component={MainPage} />
//             <Route path={`${match.url}login`} component={LoginPage} />
//             <Route path={`${match.url}admin`} component={AdminPage} />
//             <Route path={`${match.url}admin/user`} component={AdminViewUserPage} />
//             <Route path={`${match.url}products`} component={ProductPage} />
//             <Route path={`${match.url}product/details/:id`} component={DetailPage} />
//             <Route path={`${match.url}order/:id`} component={OrderPage} />
//             <Route path={`${match.url}view-order`} component={ViewOrderPage} />
//             <Route path={`${match.url}search-order`} component={SearchOrderPage} />
//         </Switch>
//     );
// }

// export default Product;
