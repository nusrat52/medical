import React from "react";

import element from "../../statics/element.png";
import trafalg2 from "../../statics/image 11.png";
import Button from "../compsObsh/button";
function Advices() {
  return (
    <>
      <div className="containerSp mt-70">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-12 d-flex flex-column justify-content-start">
            <h1 className="advices__header">Medical advices</h1>

            <div className="microsort__line"></div>
            <p className="advices__text">
              {" "}
              We are proud providers of first class service to our patents in
              Reproductive Endocrinology and IVF. The quality of the treatments,
              medical infrastructure and technological equipments of Baku
              Medical Plaza IVF Center are on par with most modern clinics
              around the world and we are certified according to ISO 9001
              quality standards.
            </p>

            <Button content="Learn more" color="white" />
          </div>

          <div className="col-lg-6 col-12 mt-4 mt-lg-0">
            <img className="microsoer__img" src={trafalg2} alt="trafalg2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Advices;
