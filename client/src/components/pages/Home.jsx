import React from "react";
import { useNavigate } from "react-router-dom";
import arvi from "../image/arvi.png"
const Home = () => {

  const navigate = useNavigate();

  const findMatch = () => {
    navigate("/findMatch");
  };

    return(
        <>
          <div className="flex sm:flex-wrap container bg-gradient-to-l from-bgarvin-400 mr-0  w-full h-full">
                <div  className=" text-arvin-600 pl-20 pt-40 gap-3">
                    <div className="pb-8">
                        <h1 className="font-homefont  text-4xl">WHERE PROGRAMMERS </h1>
                        <h1 className="font-homefont  text-4xl">FIND EACH OTHER</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="border-2 p-1 border-arvin-600" onClick={findMatch}>FIND MATCH</button>
                        <button className="border-4 text-white p-1 border-arvin-600 bg-arvin-600">SIGN UP</button>
                    </div>
                </div>
                <span className="lg:ml-80  w-4/12">
                    <img className="h-auto w-full " src={arvi} alt="groom"/>
                </span>
            </div>
        </>
    )
}
//
export default Home;