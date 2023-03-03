import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <Link to='/gerarnumeros'>Gerador de Numeros</Link>
        <Link to='/gerartextos'>Gerador de Texto</Link>
    </div>
)

export default Home