import React from 'react';

const PlayerCart = (props) => {
    const selectedPlayerCart = props.selectedPlayerCart;
    const totalPrice = selectedPlayerCart.reduce((sum, player) => sum + Number(player.price), 0);
    const playerLists = selectedPlayerCart.reduce((total, player) => total + player.name,[])
    return (
        <div>
            <h5>Total Players: {selectedPlayerCart.length}</h5>
            <h5>Players Name: 
                <ul>
                    <p><small>{playerLists}</small></p>
                </ul>
            </h5>
            <h5>Total Price: ${totalPrice}</h5>
        </div>
    );
};

export default PlayerCart;