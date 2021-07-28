import React from "react";

import element from "../../statics/element.png";
import trafalg2 from "../../statics/trafalg2.png";
import Button from "../compsObsh/button";
function Selction() {
  return (
    <>
      <div className="containerSp mt-70">
        <div className="row justify-content-between">
          <div className="col-md-6 col-12">
            <img className="microsoer__img" src={trafalg2} alt="trafalg2" />
          </div>

          <div className="col-md-5 col-12 d-flex flex-column justify-content-center">
                      <h1 className="microsoer__header">MicroSort – Gender Selection</h1>
                      

                      <div className="microsort__line"></div>
            <p className="microsoft__text">
              {" "}
              The Microsort method separates sperm according to their X and Y
              chromosome. In other words, the sperm taken from the male is
              prepared in the laboratory and the sperm sorting is carried out.
                      </p>
                      
                      <Button content="Learn more" color="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Selction;
