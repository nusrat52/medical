import React from "react";
import Vector from "../../statics/Vector.png";
import illustration_1 from "../../statics/Illustration_1.png";
import illustration_2 from "../../statics/Illustration_2.png";
import illustration_3 from "../../statics/Illustration_3.png";
import element from "../../statics/element.png";
import Button from "../compsObsh/button";

function Reklamm() {
  return (
    <div className="reklamm mt-70 ">
      <div className="containerSp d-flex justify-content-between flex-lg-row flex-column align-items-center">
        <div className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
          <h1 className="reklam__header">Over 5,100 patients trust us</h1>
          <a className="reklam__anchor" href="#">
            Appointment
          </a>
        </div>

        <div className="lineas">
          <div className="lineas__top">
            <div className="lineas__item">
              <p className="lineas__text">30</p>
              <p className="lineas__textt">Years of Experienced</p>
            </div>


                      <div className="lineas__item">
              <p className="lineas__text">4,500</p>
              <p className="lineas__textt">Happy Patients
</p>
            </div>     
          </div>

                  <div className="lineas__bottom">
                  <div className="lineas__item">
              <p className="lineas__text">20</p>
              <p className="lineas__textt">Number of Doctors</p>
            </div>


                      <div className="lineas__item">
              <p className="lineas__text">30</p>
              <p className="lineas__textt">Number of Staffs
</p>
            </div>     
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reklamm;
