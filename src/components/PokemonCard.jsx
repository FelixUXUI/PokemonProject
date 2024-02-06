import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function PokemonCard({pokemon}) {
    // «»
    const [pokemonData, setPokemonData] = useState({})

    console.log(pokemonData)

    useEffect(() => {
        const getPokemonData = async () => {
            const req = await axios.get(pokemon.url)
            setPokemonData(req.data)
        }
        getPokemonData()
    }, []);

    return (
        <div className="pokemonCard">
            <img src={pokemonData.sprites?.other.dream_world.front_default} alt=""/>
            <p>
                Name: {pokemonData.name}
            </p>

            <Link to={"pokemon-info"} state={pokemonData}>
                <button onClick={() => {}}>
                    Подробнее
                </button>
            </Link>

        </div>
    )
        ;
}

export default PokemonCard;