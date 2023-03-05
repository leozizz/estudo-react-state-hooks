import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function GeradorDeNumeros() {
// const [NOME_DA_VARIAVEL_DE_ESTADO, FUNCAO_PARA_USO_INTERNO] = useState(VALOR_INICIAL_DA_VARIAVEL);
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(0)

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100-1) + 1)
    setNumeroAleatorio(novoNumero)
  }

  return(
    <div className='display'>
      <div className='conteudo-centralizado'>
        <h3>Número aleatório</h3>
        <h1>{numeroAleatorio}</h1>
        <div className='area-botao'>
          <p>
            Click no botão abaixo para gerar um número aleatóiro:
          </p>

          <button onClick={gerarNumero}>
            Gerar Número
          </button>
        </div>
        <Link to='/'>Voltar</Link>
      </div>
    </div>
  )
}