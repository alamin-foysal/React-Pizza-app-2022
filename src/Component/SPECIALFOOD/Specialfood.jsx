import React from "react";
import "../SPECIALFOOD/special.css";
import Specialapi from "../Api/Specialapi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Specialfood = () => {
  const [api, setApi] = useState(Specialapi);

  const orde = useNavigate();
  const order = () => {
    orde("/contact");
  };

  return (
    <>
      <section className="special">
        <div className="container-fluid">
          <h1 className="mb-3">
            Our Special Pizza
            <img src="photo/pizza carton1.png" alt="pizza" />
          </h1>
          <div className="row">
            {api.map((currelem) => {
              const { id, title, price, url, serial } = currelem;
              return (
                <>
                  <div
                    className="col-6 col-md-6 col-lg-2 col-xxl-2 col-xl-2 mx-auto"
                    data-aos="zoom-in"
                    key={id}
                  >
                    <div className="spcard mt-1">
                      <img src={url} alt="pizza" className="mx-auto" />
                      <div className="spcard-body m-0 mx-auto">
                        <p>{price} </p>
                        <h5>{title}</h5>
                        <div className="order">
                          <button onClick={order}>OrderNow</button>
                          <h2>Id:{serial}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Specialfood;
