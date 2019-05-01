import React from 'react';
import './navBar.css';


class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <div className="nav-item-container">
                                <a className="nav-link" href="./App">Home</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-container">
                                <a className="nav-link" href="./mens">Men's Shoes</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-item-container">
                                <a className="nav-link" href="./womens">Women's Shoes</a>
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
