import React from 'react'
import { DownArrow } from "./svgs";

function Select() {
    return (
        <div
            tabIndex="-1"
            onMouseDown={(e) => {
              let paret = e.currentTarget;
              let hidden = paret.querySelector(".selec__hidden");
              if (e.target.classList[0] === "select__options") {
                let value = e.target.innerHTML;
                paret.querySelector("span").innerHTML = value;
              }
              if (hidden.classList[1] === "d-none") {
                hidden.classList.remove("d-none");
              } else {
                hidden.classList.add("d-none");
              }
            }}
                      onBlur={(e) => {
                        let paret = e.currentTarget;
                          let hidden = paret.querySelector(".selec__hidden");
                          if (hidden.classList[1] === "d-none") {
                            hidden.classList.remove("d-none");
                          } else {
                            hidden.classList.add("d-none");
                          }
                      }}
            className="select"
                  >
                      <div className="w-100 h-100 select__inner">
            <span className="select__selected">In Vitro Fertilization</span>
                          <DownArrow />
                          </div>
            <ul className="selec__hidden d-none">
              <li className="select__options">Tubal Reversal</li>
              <li className="select__options">Vasectomy Reversal</li>
              <li className="select__options">
                Sperm Extractions: PESA | TESA | TESE
              </li>
              <li className="select__options">
                IUI | Intrauterine Insemination
              </li>
            </ul>
          </div>
    )
}

export default Select
