import React, { useState } from 'react';
import './cardcor.css';

export default function CardCor() {

  const [ NovoEstilo, setNovoEstilo ] = useState("bg-lightgreen");

  const alterarCor = () => {

    if (NovoEstilo == 'bg-lightgreen') {
      setNovoEstilo("bg-lightseagreen");
    } else {
      setNovoEstilo('bg-lightgreen');
    }

  };

  return (

    <div className="container">

        <h1 className='cor'>Alterar Cor</h1>

        <div className={NovoEstilo}></div>

        <div className='area-cor'>

            <label>
            Troca de Cor:
            </label>

            <button onClick={ alterarCor }>Trocar</button>

        </div>
      
    </div>

  );

}

