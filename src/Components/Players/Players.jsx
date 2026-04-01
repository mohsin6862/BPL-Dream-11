import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({playersPromise}) => {
    const playersData = use(playersPromise);
    console.log(playersData)
    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Available Players</h1>
                <div>
                    <button className='btn bg-amber-400 rounded-l-2xl'>Available</button>
                    <button className='btn rounded-r-2xl'>Selected</button>
                </div>
            </div>

            <div className='grid grid-cols-3'>
               {
                playersData.map(player =><Player player={player}></Player>)
            }
            </div>

            
        </div>
    );
};

export default Players;