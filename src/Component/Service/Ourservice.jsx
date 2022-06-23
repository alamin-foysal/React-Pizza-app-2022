import React from "react";
import "../Service/service.css";
import CheckIcon from "@mui/icons-material/Check";

const Ourservice = () => {
  return (
    <>
      <section className="service">
        <div className="container-fluid">
          <h1 className="mb-3 mt-2">
            <img src="photo/pizzaslice1.png" alt="pizza" />
            Our Service
          </h1>
          <div className="row">
            <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-8 mx-auto">
              <div className="servicedetail">
                <h3>Yemmi</h3>
                <h4>Resturant</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  eligendi. Necessitatibus vitae reiciendis, sint quibusdam
                  commodi in, eos fuga doloribus consequatur ullam nisi cum
                  corrupti praesentium explicabo omnis provident ipsum?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  eligendi.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Sed, eligendi.Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sed, eligendi.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 mx-auto"
              data-aos="fade-down"
            >
              <div className="serviceimg">
                <img
                  src="photo/pizzaicon.png"
                  alt="pizza"
                  className="img-fluid mx-auto p-4"
                />
              </div>
            </div>
            <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 mx-auto">
              <div className="serviceinfo mx-5 text-md-center">
                <div className="serviceheading">
                  <h4>Home Delivery</h4>
                  <h5>+8801967923672</h5>
                </div>
                <div className="serviceorder">
                  <h6>Term and Condition</h6>
                  <ul className="text-md-center">
                    <li>
                      <CheckIcon fontSize="small" color="warning" />
                      Fresh Food
                    </li>
                    <br />
                    <li>
                      <CheckIcon fontSize="small" color="warning" />
                      Argent Delivery
                    </li>
                    <br />
                    <li>
                      <CheckIcon fontSize="small" color="warning" />
                      Target Comission
                    </li>
                    <br />
                    <li>
                      <CheckIcon fontSize="small" color="warning" />
                      Yearly Bonus
                    </li>
                    <br />
                    <li>
                      <CheckIcon fontSize="small" color="warning" />
                      Food Return{" "}
                    </li>
                    <br />
                    <li>
                      <CheckIcon fontSize="small" color="warning" />
                      Money Back Guarntee
                    </li>
                    <br />
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
export default Ourservice;
