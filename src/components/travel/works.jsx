import React from "react";
import image from "../../statics/travel/image 14.png";
import image2 from "../../statics/travel/image 15.png";
import image3 from "../../statics/travel/image 16.png";
import image4 from "../../statics/travel/image 17.png";

function Works() {
  return (
    <div className="containerSp">
      <h1 className="works__header mt-4">How It Works</h1>
      <h3 className="works__subHeader">We’ve Made It Simple for You.</h3>
      <div className="row justify-content-between flex-column-reverse flex-lg-row">
        <div className="col-12 col-lg-6">
          <img
            className="works__img"
            src={image}
            alt="Animation"
          />
        </div>

        <div className="col-12 col-lg-5 worksItem mb-5 mb-lg-0">
          <h1 className="worksItem__header">Getting Started</h1>

          <h3 className="worksItem__subHeader">The Consultation</h3>
          <p className="worksItem__text">
            It all starts with a consultation. Most who live more than a few
            hour drive from one of our{" "}
            <span className="worksItem__link">fertility clinics</span> choose to
            have their consultation by phone, FaceTime, or Skype. During your
            consultation, you and one of our{" "}
            <span className="worksItem__link"> fertility specialists</span> will
            discuss your goals, review any previous testing or cycles, and
            formulate a plan tailored specifically for you. Afterward, a member
            of our travel team will reach out to you via your patient portal to
            order your medications (which will be sent directly to your home)
            and guide you through the remainder of the process.
            <br />
            <br />
            <br />
            In order to formulate the best plan during your consultation and to
            expedite the process, we recommend getting a head start on your{" "}
            <span className="worksItem__link"> male</span>
            and <span className="worksItem__link"> female</span> fertility
            testing. If you have had testing within a year, you’re good to go.
            We also recommend following much of our{" "}
            <span className="worksItem__link"> male</span> and
            <span className="worksItem__link"> female</span> fertility
            enhancement guide in preparation for your treatment.
          </p>

          <a href="#" className="worksItem__link mt-4">
            + Schedule your consultation now.
          </a>
        </div>
      </div>

      <div className="row justify-content-between  mt-150">
        <div className="col-12 col-lg-5 worksItem">
          <h1 className="worksItem__header">
            Medications, Ultrasounds, Bloodwork
          </h1>

          <h3 className="worksItem__subHeader">Local Monitoring</h3>
          <p className="worksItem__text">
            Most fertility treatment cycles that people travel for (outside of
            <span className="worksItem__link"> tubal reversals </span> and other
            surgeries) require 3-5 doctor visits during the stimulation phase of
            treatment. These are called Monitoring Appointments. During the
            simulation period, you will likely be taking medications to help
            your eggs grow. To time the procedures effectively and make sure
            your treatment is done safely, all of this must be monitored
            closely.
            <br />
            <br />
            <br />
            Cycle monitoring appointments can be done near you with a local
            medical facility. We provide an ultrasound/bloodwork order that you
            take to your local clinic. They send us the results and, after
            analyzing them, we call you with updates, next steps, and tell you
            when to schedule your next monitoring appointment.
          </p>

          <a href="#" className="worksItem__link mt-4">
          + Learn more about monitoring
          </a>
        </div>

        <div className="col-12 col-lg-6">
          <img
            className="works__img mt-5 mt-lg-0"
            src={image2}
            alt="Animation"
          />
        </div>
          </div>
          
















          <div className="row flex-column-reverse flex-lg-row justify-content-between mt-150">
        <div className="col-12 col-lg-6">
          <img
            className="works__img mt-5 mt-lg-0"
            src={image3}
            alt="Animation"
          />
        </div>

        <div className="col-12 col-lg-5 worksItem">
          <h1 className="worksItem__header">Destination CNY
</h1>

          <h3 className="worksItem__subHeader">The Procedures
</h3>
          <p className="worksItem__text">
          All of your procedures (<span className="worksItem__link"> inseminations, IVF retrievals, transfers, tubal reversals, etc.</span> ) are done at our offices. We HIGHLY RECOMMEND that anyone who lives more than a few hour drive away arrive in the area the day before the procedure. You can typically return home the day of (by car) or the day after (by plane) your procedure. Everyone is unique, so please consult with <span className="worksItem__link"> our travel team</span>    before traveling.


            <br />
            <br />
            <br />
            If you are doing a fresh <span className="worksItem__link">  IVF Embryo Transfer</span>  and drove a long way or took a flight, we generally recommend staying in the area for the five or so days. If doing a frozen transfer, most people return home and come back next month for their <span className="worksItem__link">   Frozen Embryo Transfer (FET)</span> . Some choose beforehand to do a FET as it offers the same success as a fresh transfer and is easier to plan in advance for (sometimes plans for fresh transfers must be changed last minute due to the potential unreadiness for transfer immediately following the IVF Stimulation and Retrieval). 


          </p>

          <a href="#" className="worksItem__link mt-4">
          + Visit our location pages for tips on where to stay and what to do when you’re in town
          </a>
        </div>
      </div>

      <div className="row justify-content-between  mt-150">
        <div className="col-12 col-lg-5 worksItem">
          <h1 className="worksItem__header">
          Supporting Implantation


          </h1>

          <h3 className="worksItem__subHeader">Post-transfer Care
</h3>
          <p className="worksItem__text">
          After returning home, you will remain in our care for approximately 6-8 weeks until we are confident your pregnancy is appropriately established. During this time we will continue to provide you with ultrasound and blood orders while managing any remaining medication protocols. After this time, you will be fully discharged to your OBGYN.




          </p>

     
        </div>

        <div className="col-12 col-lg-6">
          <img
            className="works__img mt-5 mt-lg-0"
            src={image4}
            alt="Animation"
          />
        </div>
      </div>
     
    </div>
  );
}

export default Works;
