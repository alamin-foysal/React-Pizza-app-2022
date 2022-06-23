import React, { useState } from "react";
import "../connection/connect.css";
import emailjs from "@emailjs/browser";
//import cont from '../connection/connectpic/connect.png';

const Contactal = () => {
  const [result, setResult] = useState(false);
  let c = "Message is Successfully Send!!!!";
  let v = null;
  setTimeout(() => {
    setResult(false);
  }, 3000);

  const alamin = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m2r4bfc",
        "template_zwsf2bk",
        e.target,
        "user_MqOZTzXgJumrHu9dfOUsw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setResult(true);
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-10 mx-auto">
            <div className="row">
              <div className="col-12 col-xxl-7 col-xl-7 col-lg-7 col-md-7 mx-auto">
                <div className="contimg">
                  <img
                    src="photo/pizzaright4.png"
                    className="img-fluid mt-2 mr-5"
                    alt="gmail"
                  />
                </div>
              </div>
              <div className="col-12 col-xxl-5 col-xl-5 col-lg-5 col-md-5 mx-auto mt-2">
                <div className="contactme">
                  <h1>Order Me</h1>
                </div>
                <div className="emailform mb-5">
                  <form onSubmit={alamin}>
                    <div className="mb-2">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">phone</label>
                      <input
                        className="form-control"
                        type="tel"
                        name="name"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">G-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        name="user_email"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Message</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        name="message"
                        placeholder="Add Food Id No:"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="form-control btn btn-info"
                        value="Send"
                      />
                    </div>
                  </form>
                </div>
                {result ? c : v}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contactal;
