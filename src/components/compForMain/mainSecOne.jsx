import React from "react";
import "./main.css";
import trafalg from "../../statics/trafalg.png"
import Button from "../compsObsh/button"
function MainSecOne() {
  return (
    <div className="containerSp mainSection1">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <h1 className="mainSection1__header">Welcome to Baku IVF Center</h1>

          <p className="mainSection1__text">
            We are proud providers of first class service to our patents in
            Reproductive Endocrinology and IVF. The quality of the treatments,
            medical infrastructure and technological equipments of Baku Medical
            Plaza IVF Center are on par with most modern clinics around the
            world and we are certified according to ISO 9001 quality standards.
          </p>
          <Button content="Appointment" color="blue"/>
      
              </div>
              
              <div className="col-12 col-lg-6">
<img className="w-100" src={trafalg} alt="trafalg" />
        </div>
      </div>
    </div>
  );
}

export default MainSecOne;
