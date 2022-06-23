import React from "react";
import According from "../Component/according/According"
import Contactal from "../Component/connection/Contactal";
import Alfooter from "../Component/Footer/Alfooter";
import Minifooter from "../Component/minifooter/Minifooter";
import Nav from "../Component/Navbar/Nav";
const Contact=()=>{
    return(
        <>
            <Nav/>
            <Contactal/>
            <According/>
            <Alfooter/>
            <Minifooter/>
        </>
    )
}
export default Contact;