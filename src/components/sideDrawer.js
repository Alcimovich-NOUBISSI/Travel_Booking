import './sideDrawer.css';

import React from 'react';
import { Link } from "react-router-dom";

const  SideDrawer = ({visibility, reference}) => {

    return (
        <div 
        className="nav_sideDrawer" 
        style = {visibility === true ? {left: '0'}: {left: '-100%'}}
        onClick= {()=>{}}
        ref = {reference}
        >
            <Link to="/"> <p>Home</p> </Link>
            <a href="#tour_package"> <p>Tours</p> </a>  
            <Link to="/"> <p>About</p> </Link>  
            <Link to="/"> <p>Gallery</p> </Link>  
            <Link to="/"> <p>Services</p> </Link>  
            <Link to="/"> <p>Page</p> </Link>  
        </div>
    );
}

export default  SideDrawer;