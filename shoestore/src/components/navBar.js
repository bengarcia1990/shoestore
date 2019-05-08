import React from 'react';
import '../stylesheets/navBar.css';
import { NavLink } from 'react-router-dom';
import Login from "./logIn"

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <div className="nav-item-container">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-container">
                                <NavLink to="/mensShoes" className="nav-link">Men's Shoes</NavLink>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-item-container">
                                <NavLink to="/womensShoes" className="nav-link">Women's Shoes</NavLink>
                            </div>
                        </li>

                    </ul>
                    <form className="search-container">
                        <input className="search-container" type="search" placeholder="Search" aria-label="Search" />
                        <button className="searchBtn" type="submit">Search</button>
                    </form>
                    <form>
                        <div>
                            <Login />
                        </div>
                    </form>
                </div>
            </nav >

        )
    }
}



export default Navbar;
