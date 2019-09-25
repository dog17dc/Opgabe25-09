import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return(
        <div className="Navbar">
            <ul>
                <li>
                    <Link to= "/">Velkommen</Link>
                </li>
                <li>
                    <Link to= "/">Verdensballetten</Link>
                </li>
                <li>
                    <Link to= "/">Nyheder</Link>
                </li>
                <li>
                    <Link to= "/">Events og mødefacilleter</Link>
                </li>
                <li>
                    <Link to= "/">Hvad siger vores gæster om Møllerup Gods</Link>
                </li>
                <li>
                    <Link to= "/">Kontakt os</Link>
                </li>
                <li>
                    <Link to= "/">Webshop</Link>
                </li>
                
            </ul>
        </div>
    )   
}

export default Navbar;