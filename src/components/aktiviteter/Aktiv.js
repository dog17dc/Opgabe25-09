import React from 'react';
import img1 from '../img/Nyheder/ASGSGHampmark250_srcset-large.jpg'
import img2 from '../img/Nyheder/FestpaaMoellerup21_srcset-large.jfif'
import img3 from '../img/Nyheder/FestpaaMoellerup23_srcset-large.jfif'
import img4 from '../img/Nyheder/RundvisningMllerupGodsIMG3863204_srcset-large.jpg'
import img5 from '../img/Nyheder/HAMPHUDPLEJE01WM345_srcset-large.jpg'
import img6 from '../img/Nyheder/MLLERUPBANNERkopi202_srcset-large.jpg'
import img7 from '../img/Nyheder/Skrmbillede20160222kl.17.35.10_srcset-large.png'
import img8 from '../img/Nyheder/Kvindeligjgeroggodshundenisne_srcset-large.jpg'
import img9 from '../img/Nyheder/ferie205pix5_srcset-large.jfif'
import img10 from '../img/Nyheder/MollerupGodsbolig60_srcset-large.jpg'
import img11 from '../img/Nyheder/Hestepension205pix30_srcset-large.jfif'
import img12 from '../img/Nyheder/Verdensballetten900_srcset-large.jfif'
import './Aktiv.css'
function Aktiv(){
    return(
        <div className="Aktiv">
            <div className="text">
            <h2>Møllerup Gods tilbyder en perlerække af muligheder</h2>
            <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            </div>
            <div className="aktiv">
            <img src={img1} alt="Nyheder"/>
            <h3>Møllerup Hamp</h3>
            <p>På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje</p>
            </div>
            <div className="aktiv">
            <img src={img2} alt="Nyheder"/>
            <h3>Møder & events</h3>
            <p>Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet</p>
            </div>
            <div className="aktiv">
            <img src={img3} alt="Nyheder"/>
            <h3>Fest på kroen</h3>
            <p>Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.</p>
            </div>
            <div className="aktiv">
            <img src={img4} alt="Nyheder"/>
            <h3>Rundvisninger</h3>
            <p>Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. </p>
            </div>
            <div className="aktiv">
            <img src={img5} alt="Nyheder"/>
            <h3>Hamp hudpleje</h3>
            <p>Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.</p>
            </div>
            <div className="aktiv">
            <img src={img6} alt="Nyheder"/>
            <h3>Hamp fødevarer</h3>
            <p>Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup. </p>
            </div>
            <div className="aktiv">
            <img src={img7} alt="Nyheder"/>
            <h3>Møllerup bogen</h3>
            <p>Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. </p>
            </div>
            <div className="aktiv">
            <img src={img8} alt="Nyheder"/>
            <h3>Møllerup jagt</h3>
            <p>Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.</p>
            </div>
            <div className="aktiv">
            <img src={img9} alt="Nyheder"/>
            <h3>Ferie for 40</h3>
            <p>Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool</p>
            </div>
            <div className="aktiv">
            <img src={img10} alt="Nyheder"/>
            <h3>Bolig på landet</h3>
            <p>Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.</p>
            </div>
            <div className="aktiv">
            <img src={img11} alt="Nyheder"/>
            <h3>Hestepension</h3>
            <p>Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.</p>
            </div>
            <div className="aktiv">
            <img src={img12} alt="Nyheder"/>
            <h3>Verdensballetten</h3>
            <p>Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup.</p>
            </div>
        </div>
    )
}
export default Aktiv;