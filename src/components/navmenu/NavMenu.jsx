import React from "react";
import './navmenu.css';

const NavMenu = ()=>{
    return (<>
            <ul className="navmenu">
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutus">About us</a></li>
                <li><a href="#howtoapply">How to apply</a></li>
                <li><a href="#fags">FAQs</a></li>
                <li><a href="#aboutusslider">About us slider</a></li>
                <li><a href="contactus#">Contact us</a></li>
            </ul>
        </>);
}

export default NavMenu;