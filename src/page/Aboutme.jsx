import React from "react";
import Me from "../Component/aboutme/Me";
import According from "../Component/according/According";
import Alfooter from "../Component/Footer/Alfooter";
import Minifooter from "../Component/minifooter/Minifooter";
import Nav from "../Component/Navbar/Nav";
const Aboutme=()=>{
    return(
        <>
         <Nav/>
         <Me/>
         <According/>
         <Alfooter/>
         <Minifooter/>
        </>
    )
}
export default Aboutme