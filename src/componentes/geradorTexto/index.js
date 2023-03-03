import React, { useState } from "react";

export default function GeradorDeTextos() {

    const [ novoTexto, setNovoTexto ] = useState()

    function alterarTexto() {
        setNovoTexto('Hello, World!')
    }

    return (
        <div className="conteudo-centralizado">
            <div className="area-texto">
                <h2>{novoTexto}</h2>
            </div>

            <div className="area-botao">
                <label>
                    Click no botão abaixo para aparecer um texto:
                </label>

                <button onClick={alterarTexto}>
                    Gerar texto
                </button>
            </div>
        </div>
    )
}