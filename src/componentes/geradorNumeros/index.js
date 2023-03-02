import React from 'react';
import './style.css'
import { useState } from 'react';


export default function GeradorDeNumeros() {
// const [NOME_DA_VARIAVEL_DE_ESTADO, FUNCAO_PARA_USO_INTERNO] = useState(VALOR_INICIAL_DA_VARIAVEL);
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(0)

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100-1) + 1)
    setNumeroAleatorio(novoNumero)
  }

  return(
    <div className='conteudo-centralizado'>
      <h3>Número aleatório</h3>
      <h1>{numeroAleatorio}</h1>
      <div className='area-botao'>
        <label>
          Click no botão abaixo para gerar um número aleatóiro:
        </label>

        <button onClick={gerarNumero}>
          Gerar Número
        </button>
      </div>
    </div>
  )
}