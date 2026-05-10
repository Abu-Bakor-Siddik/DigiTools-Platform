import React from 'react';

const CartedCard = ({cartedProduct}) => {
    return (
        <div>
            <div>
            <div className='flex items-center gap-6 justify-between p-10 rounded-2xl border'> 
                <div className='flex items-center gap-6'>
                    <img src={cartedProduct.icon} alt={cartedProduct.name}  className='w-auto h-18.75 rounded-md'/>
                    <div>
                        <h2 className='flex items-center gap-2 font-semibold text-xl'> <FaUser></FaUser> {player.playerName}</h2>
                        <p>{cartedProduct.price}</p>
                    </div>
                </div>
                {/* <button className='btn text-red-500' onClick={() => handleDeletedSelectedPlayer(player)} > <MdDelete></MdDelete> </button> */}
            </div>
        </div>
        </div>
    );
};

export default CartedCard;