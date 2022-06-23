import React from "react";
import { Typewriter } from "react-simple-typewriter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "./hero.css";
import { useNavigate } from "react-router-dom";
//import me from '../HeroSection/alaminpic/amin72.jpg'

const Hero = () => {
  const nave = useNavigate();
  const navegate = () => {
    nave("/contact");
  };
  const hom = useNavigate();
  const home = () => {
    hom("/");
  };

  return (
    <>
      <section className="herobg">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-md-12 col-lg-12 col-xxl-12 mx-auto">
              <div className="herodetal">
                <h6 className="p-2">
                  {" "}
                  Hi Foodies !{" "}
                  <FastfoodIcon
                    variant="contained"
                    sx={{ fontSize: 40 }}
                    color="warning"
                  />
                </h6>
                <h5>Would You Like That</h5>
                <h2 className="p-2">
                  <Typewriter
                    words={[
                      "BerGer",
                      "Hot Pizza",
                      "HotDog",
                      "ChickenSoup",
                      "GrilledChicken",
                      "Chicken Pizza",
                    ]}
                    loop={8}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    delaySpeed={1000}
                    deleteSpeed={60}
                  />
                </h2>
                <h3 className="p-2">
                  Please Don't Be Hesitate.
                  <br />
                </h3>
                <p className="p-2">
                  Visit Out Yemmy Restaurent
                  <br />
                  Ready In 60 Seconds:)
                </p>
              </div>
              <div className="cbutton">
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  endIcon={<AddAPhotoIcon />}
                  href="pizmenu.jpg"
                  download="pizmenu.jpg"
                  className="mx-2"
                >
                  Get Menu
                </Button>
                <Button
                  onClick={navegate}
                  variant="contained"
                  size="small"
                  color="warning"
                  endIcon={<FileDownloadIcon />}
                  className=""
                >
                  Order Now
                </Button>
              </div>
              <div className="socialicon mx-auto fixed-bottom">
                <li>
                  <a href="#" onClick={home}>
                    <HomeIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <FacebookOutlinedIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <YouTubeIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
