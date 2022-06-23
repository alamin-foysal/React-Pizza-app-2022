import React from "react";
import { useNavigate } from "react-router-dom";
import "../Events/saleven.css";

const Salesevent = () => {
  const naveg = useNavigate();
  const saleorder = () => {
    naveg("/contact");
  };
  return (
    <>
      <section className="event pb-3">
        <div className="container-fluid">
          <h1 className="mb-3 mt-2">
            <img src="photo/pizzaslice2.png" alt="pizza" />
            Today Discount Offer
          </h1>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 mx-auto mb-3"
                  data-aos="zoom-in"
                >
                  <div className="firstimg h-100">
                    {/*<img src='photo/pizzaright1.png'className="img-fluid"/>*/}
                    <video
                      muted
                      loop
                      autoPlay
                      id="vido"
                      className="h-100"
                      poster="photo/bbq3.jpg"
                    >
                      <source src="photo/pizzavid1.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay">
                      <h4>Sale 25% Off</h4>
                      <h3>Don't Miss This</h3>
                      <div className="pizbtn">
                        <button className="mt-1" onClick={saleorder}>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-8 mx-auto">
                  <div className="row mb-1">
                    <div className="col-12" data-aos="zoom-out-up">
                      <div className="firstimg">
                        {/*<img src='photo/pizzaright1.png'className="img-fluid"/>*/}
                        <video autoPlay loop muted id="vido">
                          <source src="photo/pizzavid3.mp4" type="video/mp4" />
                        </video>
                        <div className="overlay">
                          <h4>Sale 50% Off</h4>
                          <h3>Don't Miss This</h3>
                          <div className="pizbtn">
                            <button className="mt-1" onClick={saleorder}>
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12" data-aos="zoom-out-down">
                      <div className="firstimg">
                        {/*<img src='photo/pizzaright1.png'className="img-fluid"/>*/}
                        <video autoPlay loop muted id="vido">
                          <source src="photo/pizzavid4.mp4" type="video/mp4" />
                        </video>
                        <div className="overlay">
                          <h4>Sale 65% Off</h4>
                          <h3>Don't Miss This</h3>
                          <div className="pizbtn">
                            <button className="mt-1" onClick={saleorder}>
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 mx-auto mt-1"
                  data-aos="zoom-in-up"
                >
                  <div className="firstimg h-100">
                    {/*<img src='photo/pizzaright1.png'className="img-fluid"/>*/}
                    <video autoPlay loop muted id="vido" className="h-100">
                      <source src="photo/pizzavid2.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay">
                      <h4>Sale 75% Off</h4>
                      <h3>Don't Miss This</h3>
                      <div className="pizbtn">
                        <button className="mt-1" onClick={saleorder}>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Salesevent;
