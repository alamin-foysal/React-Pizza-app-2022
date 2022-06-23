
import React from "react";
import Hero from "../Component/HeroSection/Hero";
import Nav from "../Component/Navbar/Nav";
import Alfooter from "../Component/Footer/Alfooter";
import According from "../Component/according/According";
import Minifooter from "../Component/minifooter/Minifooter";
import Test from "../Component/Testimonial/Test";
import Specialfood from "../Component/SPECIALFOOD/Specialfood";
import Prempizza from "../Component/Premium Pizza/Prempizza";
import Pizzaday from "../Component/pizzaoftheday/Pizzaday";
import Ourservice from "../Component/Service/Ourservice";
import Salesevent from "../Component/Events/Salesevent";
import Pizslider from "../Component/Pizzaslider/Pizslider";
import Review from "../Component/Coustomereview/Review";


const Home=()=>{
    return(
        <>
        <Nav/>
        <Hero/>
        <Prempizza/>
        <Specialfood/>
        <Ourservice/>
        <Salesevent/>
        <Pizzaday/>
        <According/>
        <Pizslider/>
        <Review/>
        <Test/>
        <Alfooter/>
        <Minifooter/>
        </>
    )
}
export default Home