import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/nav.css";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [light, setLight] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const [mode, setMode] = useState({
    backgroundColor: "#905C37",
  });

  const nightmode = () => {
    if (mode.backgroundColor === "#905C37") {
      setMode({ backgroundColor: "#1A1F23" });
      document.body.style.background = "black";
      setLight(false);
    } else {
      setMode({ backgroundColor: "#905C37" });
      document.body.style.background = "white";
      setLight(true);
    }
  };
  const [scrolle, setScrolle] = useState({
    backgroundColor: "transparent",
  });
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 10) {
      setScrolle({ backgroundColor: "#648523" });
    } else {
      setScrolle({ backgroundColor: "transparent" });
    }
  };

  return (
    <>
      <div className="container-fluid" style={mode}>
        <div className="row fixed-top">
          <div className="col-12 mx-auto">
            <div className="navmenu" style={scrolle}>
              <div className="brandname">
                <NavLink to="/">
                  <lottie-player
                    src="https://assets7.lottiefiles.com/packages/lf20_rvfycj0u.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                    className="logoo"
                  ></lottie-player>
                </NavLink>
              </div>
              <nav>
                <ul className={click ? "nave-menu active" : "nave-menu"}>
                  <li onClick={handleClick}>
                    <NavLink className="a" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <NavLink className="a" to="/Food">
                      Food
                    </NavLink>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <NavLink className="a" to="/Achieve">
                      Drinks
                    </NavLink>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <NavLink className="a" to="/AboutMe">
                      AboutMe
                    </NavLink>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <NavLink className="a" to="/Contact">
                      Order Now
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="night" onClick={nightmode}>
                {light ? (
                  <DarkModeIcon sx={{ fontSize: 25 }} color="warning" />
                ) : (
                  <LightModeIcon sx={{ fontSize: 25 }} />
                )}
              </div>
              <div className="menu">
                <div className="menu-icon" onClick={handleClick}>
                  {click ? (
                    <RestaurantMenuIcon
                      sx={{ fontSize: 30 }}
                      color="primary"
                      className="mx-1"
                    />
                  ) : (
                    <RestaurantIcon
                      sx={{ fontSize: 30 }}
                      color="primary"
                      className="mx-1"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
