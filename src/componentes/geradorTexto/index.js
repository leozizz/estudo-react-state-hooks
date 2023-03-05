import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function GeradorDeTextos() {

    const [ novoTexto, setNovoTexto ] = useState()

    function alterarTexto() {
        setNovoTexto('Hello, World!')
    }

    return (
        <div className="display">
            <div className="conteudo-centralizado">
                <div className="area-texto">
                    <h2>{novoTexto}</h2>
                </div>

                <div className="area-botao">
                    <p>
                        Click no botão abaixo para aparecer um texto:
                    </p>

                    <button onClick={alterarTexto}>
                        Gerar texto
                    </button>
                </div>
                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}