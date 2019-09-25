import React from 'react';
import logo from '../img/Mlleruplogo200x200transp1_srcset-large.png'
import './Header.css'
function Header(){
    return(
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Header;