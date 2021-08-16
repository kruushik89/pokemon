import React from 'react';
import './PokemonDetails.css';
import MediaQuery from "react-responsive";

const PokemonDetails = ({item, setPokemonDetail}) => {
    const {front_default} = item.sprites.other.dream_world;
    console.log(item)
    return (
        <div className="card">
            <MediaQuery maxWidth={992}>
                <div className="close" onClick={() => setPokemonDetail(null)}>X</div>
            </MediaQuery>
            <div className="card_image__details">
                <img src={front_default} alt={item.name}/>
            </div>
            <h3 className={'card_details__name'}>{item.name} #{item.id}</h3>
            <table>
                <thead>
                <tr>
                    <td className={'column_type'}>Type</td>
                    <td className={'column_fire'}>Fire</td>
                </tr>
                </thead>
                <tbody>
                {item.stats.map((stat, i) =>  <tr key={i}>
                    <td className={'column_type'}>{stat.stat.name}</td>
                    <td className={'column_fire'}>{stat.base_stat}</td>
                </tr>)}

                <tr>
                    <td className={'column_type'}>Weight</td>
                    <td className={'column_fire'}>{item.weight}</td>
                </tr>

                <tr>
                    <td className={'column_type'}>Total moves</td>
                    <td className={'column_fire'}>{item.moves.length}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PokemonDetails; 