import React from "react";
import calendar from "../../statics/treatment/clavish.png";
import plus from "../../statics/treatment/plus.png";
import binokl from "../../statics/treatment/binokl.png";
function Alltogether() {
  return (
    <div className="alltogether">
      <div className="containerSp">
        <h1 className="alltogether__header">Putting It All Together</h1>
        <h3 className="alltogether__subheader">
          Determining Your Insurance Coverage and Financial Package
        </h3>
        <h6 className="alltogether__slogan">Good news: it’s simple.</h6>

        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-md-start align-items-center ">
            <div className="d-flex align-items-center flex-column flex-md-row mb-5">
              <img
                width="130"
                className="me-md-5 me-0 mb-3 mb-md-0"
                src={calendar}
                alt="icon"
              />
              <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center">
                <p className="alltogether__text mb-3">
                  Schedule your consultation
                </p>
                <p className="alltogether__text mb-3">
                  Give us a call at 844-315-2229 or{" "}
                  <a className="alltogether__anchor" href="#">
                    head here
                  </a>{" "}
                  .
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center flex-column flex-md-row mb-5">
              <img
                width="130"
                className="me-md-5 me-0 mb-3 mb-md-0"
                src={plus}
                alt="icon"
              />
              <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center">
                <p className="alltogether__text mb-3">
                  Upload your insurance card
                </p>
                <p className="alltogether__text mb-3">
                  Simply take a quick pic and upload it to our{" "}
                  <a className="alltogether__anchor" href="#">
                    patient portal
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center flex-column flex-md-row">
              <img
                width="130"
                className="me-md-5 me-0 mb-3 mb-md-0"
                src={binokl}
                alt="icon"
              />
              <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center">
                <p className="alltogether__text mb-3">
                  Our team does some digging
                </p>
                <p className="alltogether__text mb-3">
                  We’ll upload what we find in the patient portal for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fertile ">
          <h4 className="fertile__header">The Fertile Guarantee™</h4>
          <p className="fertile__text">
            The Fertile Guarantee™ is an IVF and Donor Egg Refund Program that
            gives our patients the assurance that they will walk away with a
            child. We offer a 75% refund if all cycles are completed without
            attaining a live birth, the packages must be paid in full prior to
            starting the first cycle and no refund is given if any of the cycles
            are indeed successful.
          </p>

          <div className="d-flex justify-content-around flex-column flex-md-row w-100">
            <a className="fertile__anchor mb-3 mb-md-0" href="#">
              IVF PACKAGES
                      </a>
                      
                      <a className="fertile__anchor mb-3 mb-md-0" href="#">
                      DONOR EGG IVF PACKAGES
                      </a>

                      
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alltogether;
