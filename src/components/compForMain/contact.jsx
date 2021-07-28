import React from "react";
import girl from "../../statics/girl.png";
import Button from "../compsObsh/button"
function Contact() {
  return (
    <div className="contact">
      <div className="row">
        <div className="col-5 d-none d-lg-flex">
          {/* <img className="contact__img" src={girl} alt="" /> */}
        </div>

        <form className="col-12 col-lg-5 contact__contact">
          <h1 className="contact__header">Contact us</h1>

          <div className="contact__inputs">
            <div className="d-flex flex-column w-48">
                          {" "}
                          <label className="contact__label" htmlFor="name">Name</label>
              <input id="name" type="text" className="contact__input" />
            </div>
            <div  className="d-flex flex-column w-48 ">
                          {" "}
                          <label className="contact__label" htmlFor="email">Email</label>
              <input id="email" type="email" className="contact__input" />
            </div>
                  </div>
                  

                  <div className="d-flex flex-column contact__textareaWrapper">
                      <label className="contact__label" htmlFor="textarea">Text here</label>
                      <textarea className='contact__textarea' name="" id="textarea" cols="100%" rows="10"></textarea>
                      <div className="d-flex justify-content-end mt-5">
                      <Button content="Send us" color="blue" />
                  </div>
                  </div>
               
        </form>
      </div>
    </div>
  );
}

export default Contact;
