import React, { useState } from "react";


export default function AlterarCor() {

    const [novoEstilo, setNovoEstilo] = useState('bg-vermelho')

    const alterarEstilo = () => {
        setNovoEstilo('bg-azul')
    }

    return (
        <div className="display">
            <div className="container">
                <h2>Alterando estilo do elemento</h2>
                <div className={novoEstilo}></div>
                <p>Clique no botão para alterar o estilo do elemento acima.</p>
                <button onClick={ alterarEstilo }>Alterar</button>
            </div>
        </div>
    )
}