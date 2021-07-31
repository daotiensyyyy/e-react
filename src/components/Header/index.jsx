import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as Actions from '../../actions/userActions';
import './Header.scss';
Header.propTypes = {

};

function Header(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    // const storage = JSON.parse(localStorage.getItem("user_login"));
    const userData = useSelector(state => state.userList.credentials);
    // console.log(userData);

    // console.log('storage', storage);

    const handleLogout = () => {
        setTimeout(() => {
            dispatch(Actions.actionLogoutRequest());
            history.push('/login');
        }, 1000);
    };

    if (!userData) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Brand</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/search-order" className="nav-link">View order</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link active" aria-current="page" >Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
    else {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Brand</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/search-order" className="nav-link">View order</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Welcome, {userData.username}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/admin">Management</Link></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

}

export default Header;