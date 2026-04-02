import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const SelectedPlayers = ({selectedPlayer,setSelectedPlayer,coin,setCoin}) => {
    console.log(selectedPlayer)
    const handleDelete=(player)=>{
        // console.log('delete btn clicked',player);
        // console.log(player.name)
       const filteredPlayer = selectedPlayer.filter(deletePlayer => deletePlayer.name != player.name);
        // console.log(filteredPlayer);
        toast(`${player.name} remove from you squad and you will back your ${player.price} coins`)
        setSelectedPlayer(filteredPlayer)
        const newCoin = coin+player.price;
        setCoin(newCoin);
        
    }
    return (
        <div>
            {
                selectedPlayer.map(player=>{
                    return <div className='border p-10  my-2 rounded-2xl flex justify-between items-center'>
                      <div className='flex items-center gap-5'>
                        <img className='w-auto h-28' src={player.image} alt="" />
                        <div>
                            <h1 className='flex items-center text-xl font-bold gap-3'><FaUser></FaUser> {player.name}</h1>
                            <h3 className='font-semibold text-lg ml-8'>{player.player_type}</h3>
                        </div>
                      </div>
                      <div>
                        <button onClick={()=>handleDelete(player)} className='btn text-2xl'><FaDeleteLeft></FaDeleteLeft></button>
                      </div>
                    </div>
                        
                        })
            }
            
        </div>
    );
};

export default SelectedPlayers;