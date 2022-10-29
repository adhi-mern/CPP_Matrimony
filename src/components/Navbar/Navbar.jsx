import React from "react";

const Navsm = () => {
  return (
    <>
      <div  className="text-3xl font-bold underline">
        <h2>cppMatrimony</h2>
      </div>
    </>
  )
}

const Navmd = () => {
  return (
    <>
      <div  className="text-3xl font-bold underline">
        <h2>cppMatrimony</h2>
      </div>
    </>
  )
}

const Navlg = () => {
  return (
    <>
      <div  className="text-3xl font-bold underline">
        <h2>cppMatrimony</h2>
      </div>
    </>
  )
}

const Nav = () => {
    return (
        <>
          <div className="md:hidden">  {/*from md everything hiden*/}
            <Navsm/>
          </div>
          <div className="sm: hidden md:flex  lg:hidden">
            <Navmd/>
          </div>
          <div className="sm: hidden md:hidden lg:flex">
            <Navlg/>
          </div>
          
        </>
    )
};

export default Nav;