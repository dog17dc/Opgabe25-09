import React from 'react';
import nyhed from '../img/Artikel/IMG000200_srcset-large.jfif'
import './Nyhed.css'
function Nyhed(){
    return(
        <div className="Nyhed">
            <img src={nyhed} alt="Nyhed"/>
            <h1>Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h1>
            <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
        </div>
    )
}
export default Nyhed;