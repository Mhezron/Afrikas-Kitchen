import React from "react";
import background from "../assets/food1.jpg";
import { HiLocationMarker } from "react-icons/hi";

const Home = () => {
  return (
    <div className="fixed w-full h-screen flex items-center bg-[#FFFAFB]">
      <div
        className=" w-full h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="mx-10 pb-6 mt-40 flex justify-between items-center">
          <p className="text-5xl font-bold text-black">
            Order food to your door
          </p>
        </div>
        <div className=" mx-10 mt-6 flex items-center" >
            <HiLocationMarker size="25" classname=""/>
          <input className="py-3 px-28" placeholder="Enter your delivery address"></input>
        </div>
      </div>
    </div>
  );
};

export default Home;
