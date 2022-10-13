import React from "react";
import { TbMusicOff } from "react-icons/tb";

const Error = () => (
  <div className="w-full flex justify-center items-center gap-4 flex-col">
    <TbMusicOff size={80} className="text-red-600" />
    <h1 className="font-bold text-2xl text-white">
      Something went wrong. Please try again.
    </h1>
  </div>
);

export default Error;
