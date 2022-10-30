import React from "react";
import arvi from "../image/arvi.png"
const Home = () => {
    return(
        <>
          <div className="flex container">
             <div  className="text-arvin-600 pl-20 pt-40 gap-3">
                <h1 className="font-homefont  text-4xl">WHERE PROGRAMMERS </h1>
                <h1 className="font-homefont  text-4xl">FIND EACH OTHER</h1>
            <div className="flex gap-3">
                <h3 className="border-2 p-1 border-arvin-600">FIND MATCH</h3>
                <h3 className="border-4 text-white p-1 border-arvin-600 bg-arvin-600">SIGN UP</h3>
            </div>
            </div>
            <div className="pl-40 pr-20 h-full w- full">
                <img src={arvi} alt="person"/>
            </div>
          </div>
        </>
    )
}

export default Home;