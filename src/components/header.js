import React, {useEffect, useState, useCallback, useRef} from 'react';

import { Link } from "react-router-dom";
import useClickOutside from './click_outside';

import "./header.css";
import SideDrawer from './sideDrawer';

const Header = () => {

  const [menuVisibility, setMenuVisibility] = useState(false);

  const sideDrawer = useRef(null);
  useClickOutside(sideDrawer,()=> setMenuVisibility(false));

  const [y, setY] = useState(document.scrollingElement.scrollHeight);

  const handleNavigation = useCallback((e) => {
    if (y > window.scrollY) {
      //console.log("scrolling up");
    } else if (y < window.scrollY) {
      //console.log("scrolling down");
    }
    setY(window.scrollY)
    }, [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]
  );

  return (
    <nav id="nav">
      <Link to="/">
        <img src="images/flight_logo.png" alt="logo" />{" "}
      </Link>
      <i 
      class="fas fa-lg fa-bars"
      onClick={ ()=> {setMenuVisibility(!menuVisibility)} }
      ></i>

      <div className="nav_items">
      <Link to="/"> <p>Home</p> </Link>
      <a href="#tour_package"> <p>Tours</p> </a>  
      <Link to="/"> <p>About</p> </Link>  
      <Link to="/"> <p>Gallery</p> </Link>  
      <Link to="/"> <p>Services</p> </Link>  
      <Link to="/"> <p>Page</p> </Link>  
      </div>
      <div className="nav_id">
        <Link to="/login"> <p> Login</p> </Link>
        <p>Register</p>
      </div>
      
      <SideDrawer 
        visibility={menuVisibility} 
        reference= {sideDrawer}
      />   

    </nav>
  );
};

export default Header;
