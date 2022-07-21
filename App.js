import React from 'react';
import './App.css';

import Header from './Componentes/Header/';
import Footer from './Componentes/Footer/';
import CardText from './Componentes/CardText/';
import CardCor from './Componentes/CardCor/';
import MelhorCard from './Componentes/MelhorCard/'

function App() {

  return (
    <div className="App">
      
      <Header />

      <div className='Corpo'>
        <MelhorCard />
        <CardText />
        <CardCor />
      </div>

      <Footer />

    </div>
  );

}

export default App;
