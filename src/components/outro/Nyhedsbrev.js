import React from 'react';
import './Nyhedsbrev.css'

function Nyhedsbrev(){
    return(
        <div className="Nyhedsbrev">
            

            <form action="">
            <h2>Tilmeld nyhedsbrev</h2>
            <label htmlFor="">Email</label>
            <input type="email"/>
            <label htmlFor="">First name</label>
            <input type="text"/>
            <label htmlFor="">Efternavn</label>
            <input type="text"/>
            <div className="checkbox1">
            <input className="input2" type="checkbox"/>
            <label className="label2" htmlFor="">Møllerup - alle</label>
            </div>
            <div className="checkbox1">
            <input className="input2" type="checkbox"/>
            <label className="label2" htmlFor="">Verdensballetten</label>
            </div>
            <input className="input2" type="checkbox"/>
            <label className="label2" htmlFor="">Møllerup Hamp</label>
            <input className="tilmeld" type="submit" value="Tilmeld"></input>
            </form>
        </div>
    )
}

export default Nyhedsbrev;