import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'


export default function AlterarCor() {

    const fundoVermelho = 'bg-vermelho'
    const fundoAzul = 'bg-azul'

    const [novoEstilo, setNovoEstilo] = useState(fundoVermelho)
    const [estiloAtualizado, setEstiloAtualizado] = useState(true)

    const alterarEstilo = () => {
        setEstiloAtualizado(!estiloAtualizado)
    }

    return (
        <div className="display">
            <div className="conteudo-centralizado">
                <h2>Alterando estilo do elemento</h2>
                <div className={estiloAtualizado ? fundoVermelho : fundoAzul}></div>

                <div className="area-botao">
                    <p>Clique no botão para alterar o estilo do elemento acima.</p>
                    <button onClick={ alterarEstilo }>Alterar</button>
                </div>

                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}