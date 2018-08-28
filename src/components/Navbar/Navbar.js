import React from 'react';
import "./Navbar.css";


const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Flag Match Game!</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a>/a></li>
                </ul>
            </div>  
        </nav>
    );
}

export default Navbar;

