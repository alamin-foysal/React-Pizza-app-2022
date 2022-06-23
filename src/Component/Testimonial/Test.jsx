import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Testapi from "./Testapi";
import "../Testimonial/test.css";

const Test = () => {
  const [test, setTest] = useState(Testapi);

  return (
    <>
      <section className="testmonial">
        <div className="container-fluid mb-3">
          <div className="tes">
            <h1>Coming Soon Recipe.......</h1>
          </div>
          <div className="row">
            <div className="col-lg-10 col-xxl-10 col-xl-10 col-md-10 col-12 mx-auto">
              <div className="row">
                {test.map((curelm, i) => {
                  const { id, title, url, detail, price, time } = curelm;
                  return (
                    <div
                      className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 mx-auto gy-3"
                      key={id}
                    >
                      <Card sx={{ maxWidth: 345 }} className="carde">
                        <CardContent className=" p-2 mt-1">
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="tho"
                          >
                            {title}{" "}
                          </Typography>
                          <Typography variant="body2" className="tpe">
                            {detail}
                          </Typography>
                        </CardContent>
                        <CardActions className="cardprice">
                          <Button size="small" className="s">
                            price:{price}
                          </Button>
                          <Button size="small" className="d">
                            Id:{time}
                          </Button>
                        </CardActions>
                        <CardMedia
                          component="img"
                          height="190"
                          image={url}
                          alt="picture"
                          className="p-1 cpic"
                        />
                        <div className="cardhover">
                        
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Test;
