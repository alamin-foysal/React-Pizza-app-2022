import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Food from "./page/Food";
import Achieve from "./page/Achieve";
import Aboutme from "./page/Aboutme";
import Contact from "./page/Contact";
import Eror from "./page/Eror";
import AOS from "aos";
import "aos/dist/aos.css";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

AOS.init({
  duration: 600,
});

const override = css`
  display: block;
  margin: 25% auto;
`;
function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5000);
    setLoad(true);
  }, []);
  return (
    <>
      {load ? (
        <HashLoader color={"#FF3D43"} size={150} css={override} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/achieve" element={<Achieve />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Eror />} />
        </Routes>
      )}
    </>
  );
}

export default App;
