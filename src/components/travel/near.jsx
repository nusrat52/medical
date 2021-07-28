import React from "react";
import "./travel.css";

import { Doctor, Wallet, Health } from "../compsObsh/svgs";
function Near() {
  return (
    <div className="near">
      <h1 className="near__header">Baku Medical Plaza Always Near Me</h1>
      <h3 className="near__subHeader">
        Thousands travel to CNY every year for their fertility treatment. Here’s
        why…
      </h3>
      <div className="containerSp">
        <div className="row mt-5">
          <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
            <div className="near__item">
              <Doctor />
              <h6 className="near__itemHeader mt-4">Our Expertise</h6>
              <p className="near__text">
                Our doctors have been at the forefront of fertility medicine for
                more than two decades. As developers of immunological protocols
                for solving repetitive IVF failures and recurrent pregnancy
                loss, people seek out our experts from around the globe.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
            <div className="near__item">
              <Wallet />
              <h6 className="near__itemHeader mt-4">Our Prices</h6>
              <p className="near__text">
                We are the nation’s most affordable fertility clinic and the
                only to offer in-house payment plans. This makes top-quality
                care possible for all. Even when factoring in travel expenses,
                most people can save $10,000-20,000 for IVF or donor egg cycles.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
            <div className="near__item">
              <Health />
              <h6 className="near__itemHeader mt-4">Our Care</h6>
              <p className="near__text">
                We are passionate about treating the whole person and supporting
                you in every way. We believe true success is only found in
                helping everyone so we don’t turn people away for their AMH,
                FSH, BMI, age, or number of previously failed cycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Near;
