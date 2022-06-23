import React from "react";
import "../Coustomereview/review.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <section className="reviewsection mb-3">
        <div className="container-fluid">
          <h1 className="mb-3" data-aos="fade-up">
            Our Customers Review
            <img src="photo/pizzaslice3.png" alt="pizza" data-aos="fade-up" />
          </h1>
          <div className="row">
            <div className="col-lg-10 col-xxl-10 col-xl-10 col-md-10 col-12 mx-auto">
              <div className="row bg-success rounded">
                <div className="col-12 mx-auto">
                  <div className="caros mx-lg-5 mx-md-3 pb-5">
                    <Slider {...settings}>
                      <div className="firstslide">
                        <div className="imge">
                          <img
                            src="photo/al111.png"
                            alt="alamin"
                            className=""
                          />
                        </div>
                        <div className="detail">
                          <h4>* * * * *</h4>
                          <h5>MD.AL-Amin</h5>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Libero voluptatibus quidem quasi omnis velit
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus nulla eligendi incidunt id esse
                            reiciendis aut deleniti dolorem, earum, optio enim
                            vel commodi it
                          </p>
                          <ul className="icon">
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
                              <a href="https://www.instagram.com">
                                <InstagramIcon />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com">
                                <TwitterIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="firstslide">
                        <div className="imge">
                          <img src="photo/mp.jpg" alt="alamin" className="" />
                        </div>
                        <div className="detail">
                          <h4>* * * * *</h4>
                          <h5>Sir, Anwarul Ashraf khan(Dilip)</h5>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Libero voluptatibus quidem quasi omnis velit
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus nulla eligendi incidunt id esse
                            reiciendis aut deleniti dolorem, earum, optio enim
                            vel commodi it
                          </p>
                          <ul className="icon">
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
                              <a href="https://www.instagram.com">
                                <InstagramIcon />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com">
                                <TwitterIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="firstslide">
                        <div className="imge">
                          <img src="photo/meo.jpg" alt="alamin" className="" />
                        </div>
                        <div className="detail">
                          <h4>* * * * *</h4>
                          <h5>Sir, Al-Mujahid Hossain Tushar</h5>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Libero voluptatibus quidem quasi omnis velit
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus nulla eligendi incidunt id esse
                            reiciendis aut deleniti dolorem, earum, optio enim
                            vel commodi it
                          </p>
                          <ul className="icon">
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
                              <a href="https://www.instagram.com">
                                <InstagramIcon />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com">
                                <TwitterIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="firstslide">
                        <div className="imge">
                          <img src="photo/smp.jpg" alt="alamin" className="" />
                        </div>
                        <div className="detail">
                          <h4>* * * * *</h4>
                          <h5>Sir, Kamrul Ashraf khan(Poton)</h5>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Libero voluptatibus quidem quasi omnis velit
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus nulla eligendi incidunt id esse
                            reiciendis aut deleniti dolorem, earum, optio enim
                            vel commodi it
                          </p>
                          <ul className="icon">
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
                              <a href="https://www.instagram.com">
                                <InstagramIcon />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com">
                                <TwitterIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
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
export default Review;
