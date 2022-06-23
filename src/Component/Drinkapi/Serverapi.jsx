import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Drinkapi/serverstyle.css";
import Axios from "axios";
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 25% auto;
`;

const Serverapi = () => {
  const [drink, setDrink] = useState([]);

  const apidrink = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res.data);
        setDrink(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    apidrink();
  }, []);

  const [loadapi, setLoadapi] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadapi(false);
    }, 6000);
    setLoadapi(true);
  }, []);

  return (
    <>
      <section className="achiv">
        {loadapi ? (
          <GridLoader color={"#BD10E0"} size={50} css={override} />
        ) : (
          <div className="container-fluid p-1">
            <h1 className="mt-5 pt-3">Our Drink</h1>
            <div className="row">
              {drink.map((curelm, i) => {
                const { id, title, url, detail, price, fid } = curelm;
                return (
                  <div
                    className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 mx-auto gy-1"
                    key={id}
                  >
                    <Card sx={{ maxWidth: 345 }} className="carde">
                      <CardMedia
                        component="img"
                        height="140"
                        image={url}
                        alt="picture"
                        className="p-1"
                      />
                      <CardContent className=" p-2 mt-1">
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="th"
                        >
                          {title}{" "}
                        </Typography>
                        <Typography variant="body2" className="tp">
                          {detail}
                        </Typography>
                      </CardContent>
                      <CardActions className="cardprice">
                        <Button size="small" className="p">
                          {price}
                        </Button>
                        <Button size="small" className="t">
                          {fid}
                        </Button>
                      </CardActions>
                      <div className="cardhover"></div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default Serverapi;
