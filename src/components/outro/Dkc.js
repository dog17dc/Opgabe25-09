import React from 'react';
import logo from '../img/LogoAutoriseretPartner1_srcset-large.png'
function Dkc(){
    return(
        <div className="footer">
            <div className="logo-footer">
            <img src={logo} alt="logo"/>
            </div>
            <div className="text-footer">
                <h3>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</h3>
            </div>
        </div>
    )
}
export default Dkc;