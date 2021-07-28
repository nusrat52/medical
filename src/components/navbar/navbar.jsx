import React, { useEffect } from "react";
import "./navbar.css";
import logo from "../../statics/logo.png";
const navbar = React.createRef();
const navSlider = React.createRef();
function Navbar() {
  useEffect(() => {

    window.onscroll = function (event) {
      let heightFromTop = window.scrollY;
      if (heightFromTop >= 120) {
        navbar.current.classList.add("navbar__fixed");
      } else if (heightFromTop <= 100) {
        navbar.current.classList.remove("navbar__fixed");
      }
    };
  }, []);

  return (
    <nav ref={navbar} className="navbarr">
      <div className="containerSp navbar__Wrapper">
        <img className="navbar__logo" src={logo} alt="logo" />

        <ul className="navbar__navs">
          <li className="navbar__li">
            <a className="navbar__nav" href="#">
              About us
            </a>
          </li>

          <li
            onMouseOver={(e) => {
              e.currentTarget
                .querySelector(".navbarHover")
                .classList.remove("d-none");
            }}
            onMouseLeave={(e) => {
              e.currentTarget
                .querySelector(".navbarHover")
                .classList.add("d-none");
            }}
            className="navbar__li"
          >
            <a className="navbar__nav" href="#">
              Our treatments
            </a>
            <div className="navbarHover d-none">
              <div className="containerSp">
                <h1 className="navbarHover__header">Our treatments</h1>
                <table className="navbarHover__table">
                  <tr className="w-100">
                    <th className="navbarhover__head">Assisted Reproduction</th>
                    <th className="navbarhover__head">Donor Options</th>
                    <th className="navbarhover__head">
                      Fertility Preservation
                    </th>
                    <th className="navbarhover__head">Supporting Treatment</th>
                  </tr>

                  <tr className="w-100 navbarHover__tr">
                    <td className="navbarHover__links">Ovulation Induction</td>
                    <td className="navbarHover__links">Donor Eggs</td>
                    <td className="navbarHover__links">Egg Freezing</td>
                    <td className="navbarHover__links">
                      PGT (Preimplantation Genetic Testing)
                    </td>
                  </tr>

                  <tr className="w-100 navbarHover__tr">
                    <td className="navbarHover__links">
                      IUI | Intrauterine Insemination
                    </td>
                    <td className="navbarHover__links">Donor Sperm</td>
                    <td className="navbarHover__links">Sperm Freezing</td>
                    <td className="navbarHover__links">Fertility Massages</td>
                  </tr>

                  <tr className="w-100 navbarHover__tr">
                    <td className="navbarHover__links">
                      IVF | In Vitro Fertilization
                    </td>
                    <td className="navbarHover__links">Donor Embryos</td>
                    <td className="navbarHover__links">Embryo Freezing</td>
                    <td className="navbarHover__links">Yoga</td>
                  </tr>

                  <tr className="w-100 navbarHover__tr">
                    <td className="navbarHover__links">
                      FET | Frozen Embryo Transfer
                    </td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links">
                      MicroSort Gender Selection{" "}
                    </td>
                  </tr>

                  <tr className="w-100 navbarHover__tr">
                    <td className="navbarHover__links">Tubal Reversal</td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links"></td>
                  </tr>

                  <tr className="w-100 navbarHover__tr">
                    <td className="navbarHover__links">Vasectomy Reversal</td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links"></td>
                  </tr>

                  <tr className="w-100 navbarHover__tr">
                    <td className="navbarHover__links">
                      Sperm Extractions: PESA | TESA | TESE
                    </td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links"></td>
                    <td className="navbarHover__links"></td>
                  </tr>
                </table>
              </div>
            </div>
          </li>

          <li className="navbar__li">
            <a className="navbar__nav" href="#">
              Travel
            </a>
          </li>

          <li className="navbar__li">
            <a className="navbar__nav" href="#">
              Pricing
            </a>
          </li>

          <li className="navbar__li">
            <a className="navbar__nav" href="#">
              Fags
            </a>
          </li>
        </ul>

        <div
          onClick={(e) => {
            let qamb = e.currentTarget;
            if (qamb.classList[0] === "open") {
              qamb.classList.remove("open");
              navSlider.current.classList.remove("navSlider_anime");
              navSlider.current.classList.add("navSlider_anime_off");
              document.body.classList.remove("overflohidden");
              setTimeout(() => {
                navSlider.current.classList.remove("navSlider_anime_off");
              }, 500)
            } else {
              qamb.classList.add("open");
              navSlider.current.classList.add("navSlider_anime");
              navSlider.current.classList.remove("navSlider_anime_off");
              document.body.classList.add("overflohidden");
            }
          }}
          id="nav-icon1"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div ref={navSlider} className="navSlider">
          <div className="navSlider__content">
            <ul className="navSlider__ul">
              <li className="navslider__li">
                <a href="#" className="navslider__ancor">
                  About us
                </a>
              </li>


              <li className="navslider__li">
                <a href="#" className="navslider__ancor">
                  Our treatments
                </a>
              </li>



              <div style={{height:'30px'}} className="accordion">
                <div onClick={(e) => {
                   let accordionn = e.currentTarget.closest(".accordion");

                   if (accordionn.style.height.replace("px", "") > 30) {
                       accordionn.style.height = `30px`;
                     } else {
                       let length = accordionn.querySelectorAll(".accordion__items").length;
                     let height = +length * 24 + 30;
                     accordionn.style.height = `${height}px`;
                   }
                 
                       }} className="accordion__text align-items-center"><span className='me-3'>
                       Assisted Reproduction</span> <img width='13' src="https://image.flaticon.com/icons/png/512/566/566004.png" alt="" /> </div>
                        


                        <ul className="accordion__item">
                            <li className="accordion__items"><a className="accordion__liLink" href="#">Ovulation Induction</a> </li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">IUI | Intrauterine Insemination</a></li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">IVF | In Vitro Fertilization</a></li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">FET | Frozen Embryo Transfer</a></li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">Tubal Reversal</a></li>
                        </ul>
                    </div>
                    <div style={{height:'30px'}} className="accordion">
                <div onClick={(e) => {
                   let accordionn = e.currentTarget.closest(".accordion");

                   if (accordionn.style.height.replace("px", "") > 30) {
                       accordionn.style.height = `30px`;
                     } else {
                       let length = accordionn.querySelectorAll(".accordion__items").length;
                     let height = +length * 24 + 30;
                     accordionn.style.height = `${height}px`;
                   }
                 
                       }} className="accordion__text align-items-center"><span className='me-3'>
                       Assisted Reproduction</span> <img width='13' src="https://image.flaticon.com/icons/png/512/566/566004.png" alt="" /> </div>
                        


                        <ul className="accordion__item">
                            <li className="accordion__items"><a className="accordion__liLink" href="#">Ovulation Induction</a> </li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">IUI | Intrauterine Insemination</a></li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">IVF | In Vitro Fertilization</a></li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">FET | Frozen Embryo Transfer</a></li>
                            <li className="accordion__items"><a className="accordion__liLink" href="#">Tubal Reversal</a></li>
                        </ul>
                    </div>
              


              <li className="navslider__li">
                <a href="#" className="navslider__ancor">
                  Travel
                </a>
              </li>


              <li className="navslider__li">
                <a href="#" className="navslider__ancor">
                 Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
