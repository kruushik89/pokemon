import React from 'react';
import './Type.css';
import typePokemon from './type.color';

const Type = ({type}) => {
    // switch (type) {
    //     case 'grass':
    //     case 'normal':
    //     case 'ghost':
    //         return <div className={'type type_green'}>{type}</div>;
    //     case 'poison':
    //     case 'ground':
    //     case 'rock':
    //     case 'dark':
    //         return <div className={'type type_primary'}>{type}</div>;
    //     case 'steel':
    //     case 'fighting':
    //     case 'psychic':
    //     case 'fire':
    //     case 'dragon':
    //     case 'bug':
    //         return <div className={'type type_red'}>{type}</div>;
    //     case 'electric':
    //     case 'fairy':
    //     case 'unknown':
    //     case 'shadow':
    //     case 'flying':
    //         return <div className={'type type_yellow'}>{type}</div>;
    //     case 'ice':
    //     case  'water':
    //         return <div className={'type type_blue'}>{type}</div>;
    //     default:
    //         return type;
    // }

    return (
        <div className={'type'} style={{backgroundColor: typePokemon[type]}}>{type}</div>
    )

}

export default Type; 