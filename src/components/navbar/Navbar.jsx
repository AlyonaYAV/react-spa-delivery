import React from "react";
import './navbar.css';

const Navbar = ()=>{
    return (<nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">How to apply</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">About us slider</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>);
}

export default Navbar;