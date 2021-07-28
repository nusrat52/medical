import React from "react";
import rol from "../../statics/travel/image 19.png";
import yol from "../../statics/travel/image 20.png";
import teyyare from "../../statics/travel/image 21.png";
import logo from "../../statics/logo.png";
function Traveller() {
  return (
    <div className="mt-70 traveller">
      <h1 className="traveller__header">Types of Travelers</h1>

      <h6 className="traveller__subHeader">
        Most only need to make 1-2 trips and be in NY for a total of 2-7 days
        depending on the treatment and how far you live.
      </h6>

      <div className="containerSp">
        <div className="row justify-content-between">
          <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-between align-items-center">
            <img className="traveller__img" src={rol} alt="wheel" />

            <p className="traveller__itemHeader my-3">The ‘Short’ Driver</p>
            <p className="traveller__text">
              Usually lives 1-3 hours drive from Syracuse or Albany office. If
              this sounds like you, you can drive to and from our office the
              same day for each procedure. Some who live a couple of hours away
              even choose to do their monitoring with us.
            </p>
            <img className="traveller__img my-4" src={teyyare} alt="wheel" />
            <p className="traveller__itemHeader">Flyers</p>
            <p className="traveller__text">
              Fly to CNY the day before the procedure. If fresh transfer, stay
              in NY 3-5 days until transfer. If frozen transfer, fly back home
              after retrieval procedure and return the following month (or
              later) for <span class="worksItem__link"> FET</span> .
            </p>
          </div>

          <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-between align-items-center">
            <img className="traveller__img" src={yol} alt="wheel" />

            <p className="traveller__itemHeader  my-3">Road Trippers</p>
            <p className="traveller__text">
              Lives 3+ hours drive. Drive to CNY the day before any procedure.
              Drive back home the day of or after the procedure. If you live far
              away and are doing a fresh embryo transfer, consider staying the
              3-5 days until transfer.
            </p>
            <img className="traveller__img my-4" src={logo} alt="wheel" />
            <p className="traveller__itemHeader">BMP Experience</p>
            <p className="traveller__text">
              If your schedule allows, there’s nothing really like the BMP
              Experience and being pampered at our{" "}
              <span class="worksItem__link">
                {" "}
                BMP Healing Art Centers where
              </span>
              you can enjoy <span class="worksItem__link">
                {" "}
                acupuncture
              </span> , <span class="worksItem__link"> massage</span>, and{" "}
              <span class="worksItem__link"> yoga</span> throughout your
              treatment cycle.
            </p>
          </div>
        </div>

        <h6 className="traveller__final">
        It is important not to make any final travel arrangements until you speak with and get approval from our travel team.


        </h6>
      </div>
    </div>
  );
}

export default Traveller;
