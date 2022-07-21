import React, { useState } from "react";
import './melhorcard.css';

export default function MelhorCard() {

    const CorAmarelo = 'bg-amarelo';
    const CorOuro = 'bg-ouro';

    const [ Atualizado, setAtualizado ] = useState(false);

    const atualizarCor = () => {
        setAtualizado(!Atualizado);
    }

    return (

        <div className="container">

        <h1 className='melhor'>Alterar Cor</h1>

        <div className={Atualizado?CorOuro:CorAmarelo}></div>

        <div className='melhor-area'>

            <label>
            Troca de Cor:
            </label>

            <button onClick={ atualizarCor }>Trocar</button>

        </div>

        </div>

    );

}
