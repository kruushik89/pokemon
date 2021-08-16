import React, {useEffect, useState} from 'react';

import {getPokemon, getPokemons} from "../../services/pokemon.service";
import Pokemon from "./pokemon/Pokemon";
import Button from "../ui/buttons/Button";
import PokemonDetails from "./pokemon-details/PokemonDetails";

import './Pokemons.css';

const Pokemons = () => {

    const baseURL = `https://pokeapi.co/api/v2/pokemon/`;
    const [pokemons, setPokemons] = useState([]);
    const [nextURL, setNextURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [pokemonDetail, setPokemonDetail] = useState(null);

    useEffect(() => {
        const dataPokemons = async () => {
            let response = await getPokemons(baseURL + '?offset=0&limit=12');
            loadingPokemon(response.results);
            setNextURL(response.next);
            setLoading(false);
        }
        dataPokemons();
    }, [baseURL]);

    const loadingPokemon = async (data) => {
        const pokemon = await Promise.all(data.map(value => getPokemon(value.url)));
        setPokemons(pokemon);
    }

    const nextPage = async () => {
        setLoading(true);
        const response = await getPokemons(nextURL);
        await loadingPokemon(response.results);
        setNextURL(response.next);
        setLoading(false);
    }

    const choiceCard = async (id) => {
        const response = await getPokemons(baseURL + id);
        setPokemonDetail(response);
    }

    return (
        <div className={'wrapper'}>
            <div className={'pokemon_grid'}>
                <div className="card_list">
                    {loading ? <h2 className='card_list__loading'>Loading...</h2> :
                        <>
                            <div className={'card_list__grid'}>
                                {pokemons.map(value => <Pokemon key={value.name} item={value} choiceCard={choiceCard}/>)}
                            </div>
                            <Button cls={'card_list__button btn-blue'} onClick={nextPage}>Download More</Button>
                        </>
                    }
                </div>
                {pokemonDetail && <div className={"card_details"}>


                    <h2>Pokemon Details</h2>
                     <PokemonDetails item={pokemonDetail} setPokemonDetail={setPokemonDetail}/>
                </div>}
            </div>
        </div>
    )
}

export default Pokemons; 