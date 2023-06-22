import React from "react";
import arvi from "../image/arvi.png";

const Match = () => {
  return (
    <>
      <div className="flex sm:flex-wrap container bg-gradient-to-l from-bgarvin-400 mr-0 w-full h-full min-h-screen">
        <div className="text-arvin-600 pl-20 pt-40 gap-3 flex flex-col justify-center w-full"></div>
        <div className="absolute top-1/2 right-4 mr-4 transform -translate-y-1/2 flex flex-col items-center">
          <img className="h-auto w-64" src={arvi} alt="Arvi" />
          <div className="text-center mt-4 text-arvin-700">
            <h2 className="text-xl font-bold">Name: Arvi</h2>
            <p>Gender: Male</p>
            <p>Language: Rust</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Match;
