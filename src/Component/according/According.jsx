import React from "react";
import "../according/accord.css";
import Accordion from "react-bootstrap/Accordion";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  margin: "10px auto",
  overflow: "hidden",
};

const center = {
  lat: 23.98152825,
  lng: 90.64112240106847,
};

const According = () => {
  return (
    <>
      <section className="faqask">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-xxl-10 col-xl-10 col-md-10 col-12 mx-auto">
              <div className="row">
                <div className="col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-8 mx-auto">
                  <div className="faq">
                    <h5>
                      Ask Question and Location!!!
                      <img src="photo/cheese2.jpg" className="" alt="faq" />
                    </h5>
                  </div>
                  <div className="faqaccord mb-3 p-2">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Who is this business Owner?
                        </Accordion.Header>
                        <Accordion.Body>Md.Al-amin.</Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Is this Restaurant food is Good?
                        </Accordion.Header>
                        <Accordion.Body>
                          100% Good Quality and Hygiene.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Is any food Delivery in Online?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes!!!.plz write the food Id No in Order Section.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Do you Have any HelpLine?
                        </Accordion.Header>
                        <Accordion.Body>Yes!!! 01967-923672</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 mx-auto">
                  <div className="gmap mx-auto">
                    <LoadScript googleMapsApiKey="AIzaSyAr0EKi9icu7KaJOLMhdhktvyYh2lJMmSk">
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                      ></GoogleMap>
                    </LoadScript>
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
export default According;
