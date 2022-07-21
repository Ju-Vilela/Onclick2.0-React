import React, { useState } from 'react';
import './cardtext.css';

export default function CardText() {

  const [ TextAleat, setTextAleat ] = useState();

  const alterarTexto = () => {
    setTextAleat('OCULTO!');
  }

  return (

    <div className="container">

      <h1 className='texto'>Mostrar Texto</h1>

      <h2 className='texto'>{TextAleat}</h2>

      <div className='area-texto'>

        <label>
          Mostar Texto Oculto:
        </label>

        <button onClick={ alterarTexto }>Mostrar</button>

      </div>
      
    </div>

  );

}

