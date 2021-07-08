import React from 'react'
import Logo from './LOGO.png'
import Avtar from './man.png'
import "./Header.css";



function Header() {
    return (
        <div className="header__wrapper">
            {/*logo*/}
            <div className="header__logo">
                <img src={Logo} width={100} />
                

                </div> 
            {/* search
            <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search" type="text" />
        </div> */}
            {/*menuitems*/}
            <div className="header__menuItems">
        <a href="/">Companies</a>
        <a href="/">Holdings</a>
        <a href="/">Order Book</a>
        
      </div>
      {/*Avtars*/}
      <div className="Avtar__logo">
       <a href="#">
                <img src={Avtar} width={40} />
       </a>
      </div>
        </div> 
        
        
      
    )
}

export default Header
