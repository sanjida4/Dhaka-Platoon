import React, { useEffect, useState } from 'react';
import './DhakaPlatoon.css';
import Players from '../Players/Players';
import PlayerCart from '../PlayerCart/PlayerCart';

const DhakaPlatoon = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayerCart, setSelectedPlayerCart] = useState([]);

    useEffect(() => {
        fetch('https://api.mocki.io/v1/835566b4')
        .then(res => res.json())
        .then(data => setPlayers(data));
    })

    const handleAddPlayer = (player) => {
        const newSelectedPlayerCart = [...selectedPlayerCart, player];
        setSelectedPlayerCart(newSelectedPlayerCart);

    }
    
    return (
        <div className="container">
            <div className="player-container">
                {
                    players.map(player => <Players 
                        handleAddPlayer ={handleAddPlayer}
                        player ={player}>
                        </Players>)
                }
            </div>
            <div className="selected-player-cart">
                <h4>Selected Player</h4>
                <PlayerCart selectedPlayerCart={selectedPlayerCart}></PlayerCart>
            </div>
        </div>
    );
};

export default DhakaPlatoon;