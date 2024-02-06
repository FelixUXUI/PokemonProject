import React from 'react';
import PokemonsPage from "./pages/PokemonsPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokemonInfoPage from "./pages/PokemonInfoPage.jsx";
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<PokemonsPage/>}/>
                <Route path={"pokemon-info"} element={<PokemonInfoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;