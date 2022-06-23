import React from "react";
import Nav from "../Component/Navbar/Nav";
import Alfooter from "../Component/Footer/Alfooter";
import Minifooter from "../Component/minifooter/Minifooter";
import Serverapi from "../Component/Drinkapi/Serverapi";
const Achieve=()=>{
    return(
        <>
        <Nav/>
        <Serverapi/>
        <Alfooter/>
        <Minifooter/>
        </>
    )
}
export default Achieve;