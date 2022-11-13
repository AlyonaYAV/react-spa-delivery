import React, {useState} from "react";
import './navbar.css';
import NavMenu from './../navmenu/NavMenu';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = ()=>{
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleMenuBlock = ()=>{
        setToggleMenu(s => !s);
        console.log(toggleMenu);
    }

    return (<nav className="navbar">
            <NavMenu />
            <div className="navbar__mobile-menu">
                { toggleMenu ?
                    <RiCloseLine color="rgb(66, 8, 4)" size={28} onClick={ toggleMenuBlock } />
                    : <RiMenu3Line color="rgb(66, 8, 4)" size={28} onClick={ toggleMenuBlock } />
                }
                { toggleMenu && (<NavMenu />) }
            </div>
        </nav>);
}

export default Navbar;