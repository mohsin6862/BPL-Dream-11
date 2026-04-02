import React, { use, useState } from 'react';
import Player from '../Player/Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise,coin,setCoin}) => {
    const playersData = use(playersPromise);
    const [available,setAvailable]=useState('available');
    const [selectedPlayer,setSelectedPlayer]=useState([])
    
    // console.log(playersData)
    return (
        <div>
            <div className='flex justify-between'>
                {available === "available"? <h1 className='text-2xl font-bold'>Available Players</h1> : <h1 className='text-2xl font-bold'>selected Players ({selectedPlayer.length}/{playersData.length})</h1>}
                <div>
                    <button className={`btn ${available=='available'? "bg-amber-400" : ''} rounded-l-2xl`} onClick={()=>{setAvailable("available")}}>Available</button>
                    <button className={`btn ${available=='selected'? "bg-amber-400" : ''} rounded-r-2xl`} onClick={()=>{setAvailable('selected')}}>Selected {selectedPlayer.length}</button>
                </div>
            </div>
            




            {
                available ==="available"? (<div className='grid grid-cols-3'>
               {
                playersData.map(player =><Player key={player.id} player={player} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer}  setSelectedPlayer={setSelectedPlayer}></Player>)
            }</div>) :(<SelectedPlayers selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin}></SelectedPlayers>)
            }

            
        </div>
    );
};

export default Players;