import React from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <div className="nav-item-container">
                                <NavLink to="/">Home</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-container">
                                <NavLink to="/mensShoes">Men's Shoes</NavLink>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-item-container">
                                <NavLink to="/womensShoes">Women's Shoes</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="searchBtn" type="submit">Search</button>
                    </form>
                </div>
            </nav >

        )
    }
}



export default Navbar;
