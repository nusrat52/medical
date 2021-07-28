import React from "react";
// import "../treatmentForComp/treatment.css"
function Checkbox({ setOn }) {
  return (
    <div
      onClick={(e) => {
        let ball = e.currentTarget.querySelector(".checkbox__ball");
        if (ball.classList[1] === "checkbox__ball__animation2") {
          ball.classList.remove("checkbox__ball__animation2");
            e.currentTarget.classList.remove("checkbox_on");
            if (setOn) {
                setOn(false)
            }
        } else {
          ball.classList.add("checkbox__ball__animation2");
            e.currentTarget.classList.add("checkbox_on");
            if (setOn) {
                setOn(true)
            }
        }
      }}
      className="checkbox"
    >
      <div className="checkbox__ball"></div>
    </div>
  );
}

export default Checkbox;
