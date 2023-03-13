import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../actions/AuthAction';

const Navbar = () => {
    const dispatch = useDispatch();

    // To logout
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">iNotebook</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={`nav-link active`} aria-current="page" to="/">Home</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button
                            className='btn btn-dark'
                            onClick={handleLogout}>Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar