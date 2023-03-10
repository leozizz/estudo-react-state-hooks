import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../componentes/home";
import GeradorDeNumeros from "../componentes/geradorNumeros";
import GeradorDeTextos from "../componentes/geradorTexto";
import AlterarCor from "../componentes/alterarCor";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path="/gerarnumeros" element={<GeradorDeNumeros/>}/>
            <Route path="/gerartextos" element={<GeradorDeTextos/>}/>
            <Route path="/alterarCor" element={<AlterarCor/>}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas