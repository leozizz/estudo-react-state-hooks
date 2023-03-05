import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div className="display">
        <div className="conteudo-centralizado">
            <Link to='/gerarnumeros'>Gerador de Numeros</Link>
            <Link to='/gerartextos'>Gerador de Texto</Link>
            <Link to='/alterarCor'>Alterador de Cores</Link>
        </div>
    </div>
)

export default Home