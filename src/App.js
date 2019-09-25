import React from 'react';
import Navbar from './components/header/Navbar';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header'
import './App.css'
import Info from './components/info/Info';
import Nyhed from './components/nyheder/Nyhed';
import Nyheder from './components/nyheder/Nyheder';
import Aktiv from './components/aktiviteter/Aktiv';
import Dkc from './components/outro/Dkc';
import Footer from './components/footer/Footer';
import Nyhedsbrev from './components/outro/Nyhedsbrev';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
      <Info />
      <Nyhed />
      <Nyheder />
      <Aktiv />
      <Dkc />
      <div className="flex-this-shit">
      <iframe className="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BUZDt1Ilwc8/embed/captioned/?cr=1&amp;v=7&amp;wp=797&amp;rd=https%3A%2F%2Fwww.moellerupgods.dk&amp;rp=%2Fda#%7B%22ci%22%3A0%2C%22os%22%3A1393.8250000001062%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="946" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
      <Nyhedsbrev />
      </div>
      <Footer />
    </div>
  );
}

export default App;
