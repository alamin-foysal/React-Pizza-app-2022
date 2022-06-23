import React from "react";
import "../EROR/ero.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";
//import ero from '../EROR/erpic/er.png',

const Erorpage = () => {
  const navig = useNavigate();

  const home = () => {
    navig("/");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row my-3">
              <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 mx-auto">
                <div className="pic">
                  <img
                    src="photo/er.png"
                    alt="erpic"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
              <div className="col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-8 mx-auto">
                <div className="erop mt-5">
                  <p cldiv assName="">
                    OPPS 404 .<br />
                    page not found
                  </p>
                  <button className="btn btn-success p-2 my-2" onClick={home}>
                    <AccountBalanceIcon fontSize="large" color="warning" /> Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Erorpage;
