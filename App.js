import React from 'react';
import './App.css';

import Header from './Componentes/Header/';
import Footer from './Componentes/Footer/';
import HomePag from './Componentes/HomePag/';
import Card from './Componentes/Card/';
import Melhorado from './Componentes/Melhorado/'

function App() {

  return (
    <div className="App">
      
      <Header />

      <div className='Corpo'>
        <Melhorado />
        <HomePag />
        <Card />
      </div>

      <Footer />

    </div>
  );

}

export default App;
