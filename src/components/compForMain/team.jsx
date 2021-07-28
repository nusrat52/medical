import React from "react";
import Vector from "../../statics/Vector.png";
import illustration_1 from "../../statics/Illustration_1.png";
import illustration_2 from "../../statics/Illustration_2.png";
import illustration_3 from "../../statics/Illustration_3.png";
import element from "../../statics/element.png";
import Button from "../compsObsh/button"
function Team() {
  return (
    <>
      <div className="bruise">
        <img className="bruise__img" src={Vector} alt="vector" />
      </div>
      <div className="containerSp mt-70">
        <h1 className="team__header">Our Team</h1>
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column  align-items-center">
            <div
              style={{
                backgroundImage:
                  "url('https://us.123rf.com/450wm/rido/rido1704/rido170400095/76465313-portrait-of-smiling-doctor-with-stethoscope-around-his-neck-at-medical-clinic-happy-smiling-senior-d.jpg?ver=6')",
              }}
              className="team__img"
            ></div>

            <h3 className="team__head">Op.Dr M.Celalettin Örnek</h3>
            <p className="team__text">Women’s Diseases,Birth adnd IVF Expert</p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column  align-items-center mb-4">
            <div
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/photos/m-confident-i-can-care-for-you-picture-id945520256?k=6&m=945520256&s=612x612&w=0&h=j1pOaegUGyfFbMj2Q4t-EuFQz7258BDu-aYYhoeCgaM=')",
              }}
              className="team__img"
            ></div>

            <h3 className="team__head">Op. Dr Abdullah Arman Özdemir</h3>
            <p className="team__text">
              Urology,Andrology,Male Infertility, Microsurgery Specialist
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column  align-items-center">
            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?size=626&ext=jpg&ga=GA1.2.1936220065.1626825600')",
              }}
              className="team__img"
            ></div>

            <h3 className="team__head">Op.Dr M.Celalettin Örnek</h3>
            <p className="team__text">Women’s Diseases,Birth adnd IVF Expert</p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column  align-items-center">
            <div
              style={{
                backgroundImage:
                  "url('https://us.123rf.com/450wm/rido/rido1704/rido170400095/76465313-portrait-of-smiling-doctor-with-stethoscope-around-his-neck-at-medical-clinic-happy-smiling-senior-d.jpg?ver=6')",
              }}
              className="team__img"
            ></div>

            <h3 className="team__head">Op.Dr M.Celalettin Örnek</h3>
            <p className="team__text">Women’s Diseases,Birth adnd IVF Expert</p>
          </div>
        </div>
  
              <div className="row mt-5 position-relative">
              <div className="dotss">
                  <img src={element} alt="elemnt" />
</div>
          <div className="col-12 justify-content-between col-lg-4 d-flex flex-column align-items-center">
            <img
              className="illustration__img"
              src={illustration_1}
              alt="illustration_1"
            />
            <a href="#" className="illustration__link">
              Intrauterine Insemination
            </a>
                  </div>
                  







                  <div className="col-12  justify-content-between col-lg-4 d-flex flex-column align-items-center">
            <img
              className="illustration__img"
              src={illustration_2}
              alt="illustration_1"
            />
            <a href="#" className="illustration__link">
              Intrauterine Insemination
            </a>
                  </div>
                  










                  <div className="col-12  justify-content-between col-lg-4 d-flex flex-column align-items-center">
            <img
              className="illustration__img"
              src={illustration_3}
              alt="illustration_1"
            />
            <a href="#" className="illustration__link">
              Intrauterine Insemination
            </a>
          </div>
              </div>
              
              <div className="d-flex justify-content-center mt-5">
                  <Button content="Learn more" color="white" brRadius="big"/>
              </div>
      </div>
    </>
  );
}

export default Team;
