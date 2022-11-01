import React from "react";
import Nav from "../Navbar/Navbar";
import Home from "../pages/Home";

const DefaultLayout = () =>{
    return(
        <>
            <Nav/>
            <Home/>
        </>
    );
}

export default DefaultLayout;