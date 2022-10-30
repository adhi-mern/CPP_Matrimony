import React from "react";
import {BsListCheck} from 'react-icons/bs';

//bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500

const Navsm = () => {
  return (
    <>
        <div className="flex flex-row space-x-20 p-4 text-white">
          <div>
            <h2 className="font-bold text-4xl">cppMatrimony</h2>
            <h6 className="font-fasthand ml-14">where programmers find each other</h6>
          </div>
          <div className="flex">
            <span className="hover:text-black text-5xl">
             <BsListCheck/>
            </span>
          </div>
        </div>
      
    </>
  )
}

const Navmd = () => {
  return (
    <>
      <div className="flex container flex-row p-6 text-white ">
          <div className="ml-10 w-full ">
            <h2 className="font-bold text-4xl">cppMatrimony</h2>
            <h6 className="font-fasthand text-lg ml-14">where programmers find each other</h6>
          </div>
          <div className="flex text-lg cursor-pointer place-items-center">
            <h3 className="ml-4">Home</h3>
            <h3 className="ml-4">Match</h3>
            <h3 className="ml-4">About</h3>
            <h3 className="ml-4">Contact</h3>
          </div>
        </div>
    </>
  )
}

const Navlg = () => {
  return (
    <>
      <div className="flex container flex-row p-6 text-white">
          <div className="ml-10 w-full">
            <h2 className="font-bold text-4xl">cppMatrimony</h2>
            <h6 className="text-lg ml-14 font-fasthand">where programmers find each other</h6>
          </div>
          <div className="flex text-lg w-3/5 cursor-pointer place-items-center">
            <h3 className="ml-10">Home</h3>
            <h3 className="ml-10">Match</h3>
            <h3 className="ml-10">About</h3>
            <h3 className="ml-10">Contact</h3>
          </div>
        </div>
    </>
  )
}

const Navbar = () => {
    return (
        <>
          <nav className="bg-arvin-600 h-28x">
            <div className="md:hidden">
              <Navsm/>
            </div>
            <div  className="hidden md:flex  lg:hidden">
              <Navmd/>
            </div>
            <div className="hidden md:hidden lg:flex">   
              <Navlg/>
            </div>
          </nav>
        </>
    )
};

export default Navbar;