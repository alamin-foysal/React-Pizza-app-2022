import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";
import "../Footer/footer.css";

const Alfooter = () => {
  return (
    <>
      <section className="foot">
        <div className="container-fluid mt-5">
          <div className="row bg-dark">
            <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-3 mx-auto">
              <div className="fo">
                <div className="focon">
                  <h1>Contact Me</h1>
                </div>
                <div className="fotdetal">
                  <ul>
                    <li>
                      <p>
                        <AccountBalanceIcon color="success" fontSize="small" />
                        Gurpara,Word No: 2
                      </p>
                    </li>
                    <li>
                      <p>
                        <AddLocationIcon color="primary" fontSize="small" />{" "}
                        Palash,Narshingdi
                      </p>
                    </li>
                    <li>
                      <p>
                        <WifiCalling3Icon color="warning" fontSize="small" />
                        Mobile:01967-923672
                      </p>
                    </li>
                    <li>
                      <p>
                        <MailOutlineIcon color="secondary" fontSize="small" />
                        alaminamin69@yahoo.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-3 mx-auto">
              <div className="quicklink">
                <div className="quick">
                  <h1>Quick Links</h1>
                </div>
                <div className="cours">
                  <ul>
                    <li>
                      <NavLink className="q" to="/courses">
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="q" to="/achieve">
                        Achieve
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="q" to="/aboutme">
                        AboutMe
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="q" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-3 mx-auto">
              <div className="sociallink">
                <div className="slink">
                  <h1>Social Links</h1>
                </div>
                <div className="slinkicon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com">
                        <FacebookOutlinedIcon
                          color="success"
                          fontSize="medium"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com">
                        <YouTubeIcon color="warning" fontSize="medium" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">
                        <InstagramIcon color="primary" fontSize="medium" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <TwitterIcon color="secondary" fontSize="medium" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-3 mx-auto">
              <div className="rproject">
                <div className="repoject">
                  <h1>Recently Poject</h1>
                </div>
                <div className="recenpoject">
                  <ul>
                    <li>
                      <a href="https://macawresturent.netlify.app">Resturent</a>
                    </li>
                    <li>
                      <a href="https://alamincv69.netlify.app">PortFolio</a>
                    </li>
                    <li>
                      <a href="#">E-commerce</a>
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="say something...."
                        className="p-1 mb-1 text-danger"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Alfooter;
