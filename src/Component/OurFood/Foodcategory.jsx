import React, { useState } from "react";
import "../OurFood/foodcate.css";
import Foodapi from "../Api/Foodapi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Foodcategory = () => {
  let ordercate = useNavigate();
  const catorder = () => {
    ordercate("/contact");
  };
  const [food, setfood] = useState(Foodapi);

  const catefood = (cat) => {
    let updatecat = Foodapi.filter((curvalu) => {
      return curvalu.category === cat;
    });

    setfood(updatecat);
  };

  return (
    <>
      <section className="foodcat">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 mx-auto">
              <div className="catebtn">
                <ul className="mx-0 mx-md-3">
                  <li>
                    <button
                      className="btn btn-primary"
                      onClick={() => catefood("cheege pizza")}
                    >
                      Chese Pizza
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-warning"
                      onClick={() => catefood("veggie pizza")}
                    >
                      Vegie Pizza
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-success"
                      onClick={() => catefood("meat pizza")}
                    >
                      Meat Pizza
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-danger"
                      onClick={() => catefood("bbq pizza")}
                    >
                      BBQ Pizza
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-info"
                      onClick={() => catefood("chicken pizza")}
                    >
                      Chiken Pizza
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-danger"
                      onClick={() => setfood(Foodapi)}
                    >
                      All Pizza
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 mx-auto">
              <div className="row">
                {food.map((curelm, i) => {
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
                            Price:{price}
                          </Button>
                          <Button size="small" className="t">
                            Id:{fid}
                          </Button>
                        </CardActions>
                        <div className="cardhover">
                          <h1 className="btn btn-danger" onClick={catorder}>
                            OrderNow
                          </h1>
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
export default Foodcategory;
