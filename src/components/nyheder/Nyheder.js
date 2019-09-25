import React from 'react';
import nyheder from '../img/Artikel/350x35000_srcset-large.png'
import nyheder2 from '../img/Artikel/verdensballet0_srcset-large.png'
import nyheder3 from '../img/Artikel/moellerup0_srcset-large.png'
import './Nyheder.css'

function Nyheder(){
    return(
        <div className="Nyheder">
            <div className="NyHeder">
            <img src={nyheder} alt="Nyheder"/>
            <h2>Køb vores hampeprodukter</h2>
            <p>På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..</p>
            </div>
            <div className="NyHeder">
            <img src={nyheder2} alt="Nyheder"/>
            <h2>Verdensballetten 2019</h2>
            <p>Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods</p>
            </div>
            <div className="NyHeder">
            <img src={nyheder3} alt="nyheader"/>
            <h2>Historien om Møllerup Gods</h2>
            <p>Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.</p>
            </div>
            
        </div>
    )
}
export default Nyheder;