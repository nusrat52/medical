import React from "react";
import monitor from "../../statics/travel/image 19 (1).png";
import drop from "../../statics/travel/image 20 (1).png";
import xerite from "../../statics/travel/image 18.png";
function Monitoring() {
  return (
    <div className="mt-70 monitoring">
      <h1 className="traveller__header">Finding A Monitoring Facility</h1>

      <div className="containerSp">
        <h6 className="monitoring__subHeader">
          During a treatment cycle, you typically need to have your Follicles,
          Uterus, and Hormones looked at 3-5 times. For that you’ll need to find
          a medical facility (usually your local OBGYN, Fertility Clinic, or
          Radiology Department, in combination with LabCorp or Quest
          Diagnostics) to perform the following with same-day results.
        </h6>
        <div className="row justify-content-between">
          <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-between align-items-center">
            <img className="traveller__img" src={monitor} alt="" />

            <div className="monitoring__text2 my-3">
              Transvaginal Ultrasounds
            </div>

            <p className="traveller__text">
              Your Ultrasound Monitoring Clinic must be able to do a
              transvaginal follicular ultrasound and report the number and size
              of each follicle along with the endometrial thickness and type.
              After establishing a pregnancy they will need to be able to
              perform a transvaginal prenatal ultrasound with the number of sacs
              (heartbeats) and viability.
            </p>

            <p className="traveller__text mt-4">
              Your current OB/GYN is usually the best place to start when trying
              to find a monitoring facility. If they are unable to provide
              ultrasounds during monitoring, we recommend checking with a local
              fertility clinic or radiology office/department at a hospital.
            </p>
          </div>

          <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-between align-items-center">
            <div className='d-flex align-items-center flex-column'>
              <img className="traveller__img" src={drop} alt="" />

              <div className="monitoring__text2 my-3">Blood Work</div>

              <p className="traveller__text">
                Your blood monitoring clinic must be able to do same-day
                Estradiol, Progesterone, LH, FSH, TSH, and Quantitative hCG.
              </p>
            </div>
            <p className="traveller__text mt-4">
              If your ultrasound monitoring clinic cannot do the blood work
              check out Lab Corp or Quest Diagnostics.{" "}
              <span class="worksItem__link"> LabCorp</span> and{" "}
              <span class="worksItem__link"> Quest</span>
              <span class="worksItem__link"> Diagnostics</span> are the nation’s
              largest network of medical laboratories and have blood drawing
              facilities throughout the country. We work with them every day.
            </p>
          </div>
        </div>

        <h1 className="monitoring__header2">Affiliate Monitoring Facilities</h1>

        <p className="monitoring__text3">
          It’s true that many people simply use their local OBGYN as their
          monitoring facility as we work with any medical offices capable of
          doing the ultrasounds and blood work. However, if you’re lucky, you
          may live near one of our affiliate monitoring facilities who we work
          with on a regular basis.
              </p>
              
              <img className="w-100 mb-0 mb-md-5" src={xerite} alt="map" />
              <br /><br />
              <br /><br />
      </div>
    </div>
  );
}

export default Monitoring;
