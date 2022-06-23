import React from "react";
import "../Premium Pizza/prem.css";
import { useNavigate } from "react-router-dom";

const Prempizza = () => {
  const buy = useNavigate();

  const buynow = () => {
    buy("/contact");
  };
  return (
    <>
      <section className="prempiz">
        <div className="container-fluid my-2">
          <div className="row">
            <h1 className="my-3 mx-auto">Our Premium Offer</h1>
            <div className="col-lg-10 col-xl-10 col-xxl-10 col-md-10 col-12 mx-auto">
              <div className="row bg-dark">
                <div
                  className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 mx-auto"
                  data-aos="fade-right"
                >
                  <div className="premimg mt-4">
                    <img
                      src="photo/prem.png"
                      alt="premium pizza"
                      className="img-fluid mx-auto"
                    />
                  </div>
                </div>
                <div className="col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-8 mx-auto">
                  <div className="premdetail mx-5">
                    <h3>Premium Pizza</h3>
                    <br />
                    <p className="price">$29.99</p>
                    <br />
                    <h5>Especial Price</h5>
                    <h6>Id:99</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque quas modi, ipsam eveniet harum quibusdam, incidunt
                      iusto cum aliquam facere libero alias cupiditate veritatis
                      odit corrupti sed! Vitae, aut dolore?
                    </p>
                  </div>
                  <div className="buton mx-5 py-2">
                    <button className="btn btn-danger" onClick={buynow}>
                      Order Now
                    </button>
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
export default Prempizza;
