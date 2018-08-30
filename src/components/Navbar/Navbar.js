import React from 'react';
import "./Navbar.css";


const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul>
                <li href="/" className="">Top Score: {props.topScore}</li>
                <li href="/" className="">{props.message}</li>
                <li href="/" className="">Score: {props.score}</li>
                </ul>
            </div>  
        </nav>
    );
}

export default Navbar;

