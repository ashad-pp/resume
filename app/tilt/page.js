"use client";
import React from "react";
import { Tilt } from 'react-tilt'


import Confetti from 'react-confetti'
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const page = () => {
  return (
    <Tilt options={defaultOptions}>
      <div className="w-screen h-screen flex justify-center items-center bg-zinc-700">
        <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        />
        <div className="w-[300px] h-[300px] bg-blue-700  rounded-lg flex justify-center items-center text-2xl font-bold">This is good </div>
      </div>
    </Tilt>
  );
};

export default page;
