import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AdminPage from './pages/AdminPage';

User.propTypes = {

};

function User(props) {
    const match = useRouteMatch();
    // console.lo(match.url + '/details');
    return (
        <Switch>
            <Route path={`${match.url}`} component={AdminPage} />
            {/* <Route path={`${match.url}/user`} component={AdminViewUserPage} /> */}
        </Switch>
    );
}

export default User;
