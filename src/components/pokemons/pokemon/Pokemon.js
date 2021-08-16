import React from 'react';
import Type from "../../ui/type/Type";
import './Pokemon.css';

const Pokemon = ({item, choiceCard}) => {
    const {front_default} = item.sprites.other.dream_world;
    return (
            <div className={'card'} onClick={() => choiceCard(item.id)}>
                <div className="card_image">
                    <img src={front_default} alt={item.name}/>
                </div>
                <h4>{item.name}</h4>
                {item.types.map((type, i) => <Type key={i} type={type.type.name}/>)}
            </div>
    )
}

export default Pokemon; 