import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pizzaslider/pizzastyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Pizslider = () => {
  const piz = useNavigate();
  const pizslid = () => {
    piz("/contact");
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="peslider my-5">
        <div className="container-fluid">
          <div className="row bg-secondary">
            <div className="col-lg-10 col-xxl-10 col-xl-10 col-md-10 col-12 mx-auto">
              <div className="row ">
                <div className="col-12 col-xl-6 col-xxl-6 col-lg-6 col-md-6 mx-auto">
                  <div className="pizsliderdetail mt-4" data-aos="fade-right">
                    <h5>Testy and spices Pizza</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Autem tempora earum repellendus soluta inventore
                      reprehenderit excepturi quasi ducimus vel libero delectus,
                      quaerat exercitationem necessitatibus id rem vero iste
                      recusandae in!
                    </p>

                    <div className="pebtn">
                      <button className="" onClick={pizslid}>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 col-xxl-6 col-lg-6 col-md-6 mx-auto">
                  <div className="carosal p-2 mb-5 mt-md-5">
                    <Slider {...settings}>
                      <div>
                        <img
                          src="photo/pizzaright1.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright2.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright3.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright4.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright5.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright6.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright7.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright8.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright9.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright10.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright11.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div>
                        <img
                          src="photo/pizzaright12.png"
                          alt="pizza"
                          className="img-fluid my-5"
                        />
                      </div>
                    </Slider>
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
export default Pizslider;
