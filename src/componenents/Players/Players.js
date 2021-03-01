import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './Players.css';

const Players = (props) => {
    const {image, name, price} = props.player;
    return (
        <div className="single-player mt-4 col-md-5">
            <img src={image} alt=""/>
            <h5>{name}</h5>
            <p>Price: ${price}</p>
            <button 
                className="btn btn-danger btn-sm"
                onClick={() => props.handleAddPlayer(props.player)}>
                    <FontAwesomeIcon icon={faUserFriends}/> Add to team
            </button>
        </div>
    );
};

export default Players;