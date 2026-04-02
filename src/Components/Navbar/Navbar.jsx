import React from 'react';
import mainLogo from '../../assets/logo.png'
import coinImg from '../../assets/Currency.png';
const Navbar = ({coin}) => {
    return (
         <div className="navbar bg-base-100 shadow-sm p-4 my-5">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={mainLogo} alt="Main Logo" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Features</a></li>
      <li><a>Team</a></li>
      <li><a>Schedule</a></li>
      <button className='btn'>{coin} Coin <img src={coinImg} alt="" /></button>
    </ul>
  </div>
</div>
    );
};

export default Navbar;