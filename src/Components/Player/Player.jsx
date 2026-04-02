import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Player = ({
  player,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  // console.log(player)
  const {
    name,
    batting_style,
    bowling_style,
    country,
    image,
    player_type,
    price,
    rating,
  } = player;
  const [isSelected, setSelected] = useState(false);
  const handleSelectedPlayer = () => {
    const alreadySelected = selectedPlayer.find((p) => p.id === player.id);

    if (alreadySelected) {
      toast.warn(`${name} already selected`);
      return;
    }
    if (coin > price) {
      toast.success(`congratulation ${name} is selected`);
      const newCoin = coin - price;
      setCoin(newCoin);
    } else {
      toast.error(`Insufficient Coins! You can not select ${name} `);
      return;
    }
    setSelected(true);
    setSelectedPlayer([...selectedPlayer, player]);
  };
  return (
    <div className="my-10">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <img className="h-80 w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser></FaUser> {name}
          </h2>
          <div className="flex justify-between my-3">
            <h2 className="text-lg font-medium flex items-center gap-3">
              <FaFlag></FaFlag> {country}
            </h2>
            <button className="btn">{player_type}</button>
          </div>
          <div className="divider"></div>
          <h3 className="text-sm font-medium">Rating: {rating}</h3>
          <div className="flex justify-between my-3">
            <h2 className="text-sm font-medium ">{batting_style}</h2>
            <h2 className="text-sm font-medium ">{bowling_style}</h2>
          </div>
          <div className="flex justify-between my-3">
            <h2 className="text-sm font-semibold ">Price: {price}</h2>
            <button
              className="btn"
              onClick={handleSelectedPlayer}
              disabled={isSelected ? true : false}
            >
              {isSelected ? "Selected" : "Choose Player"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
