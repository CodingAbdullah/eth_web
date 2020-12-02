import React from 'react';
import './Styles/card.css';
import king from '../Components/assets/king.png';
import queen from '../Components/assets/queen.png';
import bishop from '../Components/assets/bishop.png';
import rook from '../Components/assets/rook.png';
import knight from '../Components/assets/knight.png';
import pawn from '../Components/assets/pawn.png';

const Card = (props) => {

    let nameValueMap = new Map();

    nameValueMap.set('king', king);
    nameValueMap.set('queen', queen);
    nameValueMap.set('bishop', bishop);
    nameValueMap.set('rook', rook);
    nameValueMap.set('pawn', pawn);
    nameValueMap.set('knight', knight);

    const nameValue = props.value === 'Abdullah' || props.value === 'Boss' ? false : props.value;

    return (
       <div className="card">
           <h1>{props.value}</h1>
           <img src={nameValueMap.get(nameValue)} height="150" width="100" alt={nameValue}/>
       </div>
    )
}

export default Card;