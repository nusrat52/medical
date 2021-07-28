import React from "react";
import "./footer.css";
import logo from "../../statics/logo.png";
import { Instagram, Facebook, Letter } from "../compsObsh/svgs";
function Footer() {
  return (
    <footer className="footer">
      <div className="containerSp d-flex justify-content-between flex-xl-row flex-column">
        <div className="fooer__start">
          <div className='d-flex justigy-content-xl-start justify-content-center'>
            <img className='wid100' width="334" src={logo} alt="logo" />
          </div>
          <div className="footer__adress">
            <div className="footer__adres1 pe-5">
              <span className="footer__text">phone</span>

              <span className="footer__text">+994 55 538 80 40</span>

              <span className="footer__text">+994 55 798 78 79</span>
            </div>

            <div className="footer__adres1">
              <span className="footer__text">Adress</span>

              <span className="footer__text">Azerbaijan, Baku</span>

              <span className="footer__text">
                Khatai district, Babak avenue, 92N
              </span>
            </div>
          </div>
        </div>

        <div className="footer__center">
          <div className="footer__item">
            <h1 className="footer__header mb-3">Embryology</h1>
            <p className="footer__text">In Vitro Fertilization</p>
            <p className="footer__text">Sperm Donation</p>
            <p className="footer__text">Embryo Donation In Baku</p>
                  </div>
                  


                  <div className="footer__item">
            <h1 className="footer__header mb-3">Embryology</h1>
            <p className="footer__text">In Vitro Fertilization</p>
            <p className="footer__text">Sperm Donation</p>
            <p className="footer__text">Embryo Donation In Baku</p>
                  </div>
                  



                  <div className="footer__item">
            <h1 className="footer__header mb-3">Embryology</h1>
            <p className="footer__text">In Vitro Fertilization</p>
            <p className="footer__text">Sperm Donation</p>
            <p className="footer__text">Embryo Donation In Baku</p>
                  </div>
                  

     
        </div>

        <div className="footer__final">
          <p className="footer__text">Social media accounts</p>

          <div className="d-flex align-items-center">
            <div>
              <Letter />
            </div>
            <div className="mx-2">
              <Facebook />
            </div>
            <div className="mt-1">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
