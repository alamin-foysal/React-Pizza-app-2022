import React from "react";
import "../aboutme/me.css";

const Me = () => {
  return (
    <>
      <section className="pizzame">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-10 mx-auto">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="mephoto">
                    <img
                      src="photo/pizzaright2.png"
                      className="img-fluid mx-auto"
                      alt="alamin"
                    />
                  </div>
                  <div className="medetal mt-5">
                    <h1>Hello,</h1>
                    <p>
                      I am Al-Amin .Owners of Yummy Resturant. I specialize in
                      building Yummy Pizza. Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Provident delectus,
                      sapiente, nemo, labore hic vitae nesciunt placeat fugiat
                      iste eos quis libero quisquam sed ex rerum nostrum totam
                      maiores id. Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Tempora, quia reprehenderit itaque quas
                      repudiandae, voluptate odit, numquam ullam dolorum
                      officiis voluptatum iusto error sed voluptas
                      exercitationem? Molestiae fugiat pariatur qui. Please
                      don't feel hesitated to contact me.
                    </p>
                    <h4>
                      Any One Can Hire Me.I will be Happy To Work with You:)
                    </h4>
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
export default Me;
