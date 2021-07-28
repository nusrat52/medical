import React from "react";
import Select from "../compsObsh/select";
import { Done } from "../compsObsh/svgs";
import Checkbox from "../compsObsh/checkbox";
import Niddle from "../../statics/treatment/niddle.png";
import Button from "../compsObsh/button";
function Paymant() {
  return (
    <div className="mt-70 payment containerSp">
      <div className="row">
        <div className="col-12 col-md-4 d-flex  justify-content-center mb-3 mb-md-0">
          <a href="#" className="paymant__links">
            ASSISTED REPRODUCTION
          </a>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
          <a href="#" className="paymant__links">
            PRESERVING FERTILITY
          </a>
        </div>

        <div className="col-12 col-md-5 d-flex  justify-content-center mb-3 mb-md-0">
          <a href="#" className="paymant__links">
            DONOR PACKAGES
          </a>
        </div>
      </div>

      <div className="row mt-150 d-flex justify-content-between">
        <div className="col-12 col-lg-4 mb-3 mb-lg-0">
          <Select />

          <p className="paymant__text">
            The female’s eggs are removed from the ovaries, fertilized and grown
            in a lab, and placed back into the woman’s uterus. The gold standard
            of reproductive medicine.
          </p>
          <p className="paymant__autoIn">AUTOMATICALLY INCLUDED</p>
          <h2 className="paymant__header">Local Monitoring</h2>

          <div className="d-flex align-items-center my-2">
            <Done />
            <p className="paymant__itemText ms-3">Retrieval + Anesthesia</p>
          </div>

          <div className="d-flex align-items-center my-2">
            <Done />
            <p className="paymant__itemText ms-3">Retrieval + Anesthesia</p>
          </div>

          <div className="d-flex align-items-center my-2">
            <Done />
            <p className="paymant__itemText ms-3">Retrieval + Anesthesia</p>
          </div>

          <div className="d-flex align-items-center my-2">
            <Done />
            <p className="paymant__itemText ms-3">Retrieval + Anesthesia</p>
          </div>

          <div className="d-flex ms-5 mb-4 mt-2">
            <p className="paymant__itemText">ADD ONS</p>
          </div>

          <div className="d-flex align-items-center my-3">
            <Checkbox />
            <p className="paymant__itemText ms-3">Frozen Transfer</p>
          </div>

          <div className="d-flex align-items-center my-3">
            <Checkbox />
            <p className="paymant__itemText ms-3">Frozen Transfer</p>
          </div>

          <div className="d-flex align-items-center my-3">
            <Checkbox />
            <p className="paymant__itemText ms-3">Frozen Transfer</p>
          </div>

          <div className="discount">
            <h3 className="discount__header">DISCOUNT</h3>
            <div className="d-flex align-items-center my-3">
              <Checkbox />
              <p className="paymant__itemText ms-3">
                Military & Vet Discount 5%
              </p>
            </div>

            <h3 className="discount__header">FINANCE</h3>

            <div className="d-flex align-items-start">
              <div className="me-3">
                <h4 className="finance__header mt-0">One Time Payment</h4>
                <p className="finance__text">Paid in full before treatment</p>
              </div>

              <div>
                <p className="finance__text mb-3">Finance</p>
                <Checkbox />
                <p className="finance__text mt-1">
                  1st month payment due before treatment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-7 col-xl-6">
          <div className="calculator">
            <p className="paymant__itemText mb-3">Sample Payment Calculator</p>

            <div className="calculator__box d-flex">
              <img src={Niddle} width="100" alt="niddle" />
              <div className="d-flex justify-content-between w-100 ms-4">
                <div>
                  <p className="paymant__itemText mb-4">
                    In Vitro Fertilization
                  </p>

                  <p className="paymant__itemText calculator_thin">
                    National Average.
                  </p>
                </div>

                <div>
                  <p className="paymant__itemText calculator_thick mb-4">
                    $ 3995
                  </p>

                  <p className="paymant__itemText calculator_thin">$12000</p>
                </div>
              </div>
            </div>

            <div className="calculator__box d-flex mt-4">
              <p className="h-100 my-auto">+</p>
              <div className="d-flex justify-content-between w-100 ms-4">
                <div>
                  <p className="paymant__itemText calculator_thick mb-4">
                    In House Monitoring{" "}
                  </p>

                  <p className="paymant__itemText calculator_thin"></p>
                </div>

                <div>
                  <p className="paymant__itemText calculator_thick mb-4"></p>

                  <p className="paymant__itemText calculator_thick">$ 995</p>
                </div>
              </div>
            </div>

            <div className="calculator__box d-flex my-4">
              <div className="d-flex justify-content-between w-100 ms-4">
                <div>
                  <p className="paymant__itemText calculator_thick mb-4">
                    Total to CNY
                  </p>
                  <p className="paymant__itemText  mb-4 calculator_thick">
                    Estimated 3rd Party Costs
                  </p>
                  <p className="paymant__itemText  mb-4 paymant__itemText_total ">
                    Grand Total
                  </p>{" "}
                  <p className="paymant__itemText  calculator_thin">
                    National Average:
                  </p>
                </div>

                <div>
                  <p className="paymant__itemText calculator_thick mb-4">
                    $4990
                  </p>

                  <p className="paymant__itemText  mb-4 calculator_thin">$0</p>

                  <p className="paymant__itemText  mb-4 calculator_thick mb-4">
                    $4990
                  </p>

                  <p className="paymant__itemText calculator_thin">$13500</p>
                </div>
              </div>
            </div>

            <h4 className="paymant__itemText mb-3">Payment Method</h4>

            <div className="payment__input">
              <span>XXXX-XXXX-XXXX-XXXX</span>

              <span>MM/AA</span>

              <span>CVC</span>
            </div>

            <div className="paymant__buttonWrapper">
              <Button content="PURCHASE" brRadius="small" color="blue" />
              <Button
                content="SCHEDULE YOUR CONSULTATION"
                brRadius="small"
                color="white"
              />
            </div>
          </div>

          <div className="d-flex flex-column align-items-center">
            <p className="payment__text2">
            Self pay pricing. The above calculation is for simulation purposes only.


            </p>
            <Button content="LEARN MORE ABOUT IVF" brRadius="small" color="blue" />

          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
}

export default Paymant;
