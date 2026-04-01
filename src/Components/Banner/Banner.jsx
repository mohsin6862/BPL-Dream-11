import React from 'react';
import bgImg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <div
  className="hero min-h-6/12 rounded-2xl my-10"
  style={{
    backgroundImage:
      `url(${bgImg})`,
  }}
>
  <div className="hero-overlay rounded-2xl" ></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
        <img  className='mx-auto py-4' src={bannerImg} alt="" />
      <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
       Beyond Boundaries Beyond Limits
      </p>
      <button className=" px-4 py-2 rounded-xl font-semibold text-black bg-yellow-500">Claim Free Credit</button>
    </div>
  </div>
</div>
    );
};

export default Banner;