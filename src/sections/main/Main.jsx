import React from "react";
import './main.css';
import { ImArrowRight2 } from 'react-icons/im';

const Main = ()=>{
    return (<div className="main">
        <div className="main__text">
            <p>Your awesome traffic permit consultant.</p>
            <button className="main__button">
                Get started
                <ImArrowRight2 className="main__button_arrow" />
            </button>
        </div>
    </div>)
}

export default Main;