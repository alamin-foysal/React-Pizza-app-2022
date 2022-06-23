import React from "react";
import { useNavigate } from "react-router-dom";
import "../pizzaoftheday/pizza.css";
const Pizzaday = () => {
  const piz = useNavigate();
  const pizday = () => {
    piz("/contact");
  };
  return (
    <>
      <section className="pizzaday my-4">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-10 col-xl-10 col-xxl-10 col-md-10 col-12 mx-auto">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="pizzabg">
                    <h6>Our Pizza Of The Day</h6>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                      <br />
                      Optio nihil repellat adipisci, placeat a illum provident
                      natus culpa rem hlhj rieo rwruw uyj yeoop yellow green red
                      <br />
                    </p>
                    <h5>Free Delivery </h5>
                    <h3>$2</h3>
                    <div className="pizzabtn">
                      <button className="mt-2" onClick={pizday}>
                        Order Now
                      </button>
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
export default Pizzaday;
