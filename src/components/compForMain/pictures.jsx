import React, {useState} from "react";
import fiction from "../../statics/Rectangle 41 (1).png";
import fiction1 from "../../statics/Rectangle 42 (1).png";
import fiction2 from "../../statics/Rectangle 43.png";
function Pictures() {
    const [pictureOne, setPictureOne] = useState(false)
  return (
    <div className="pictures containerSp mt-5">
          <div tabIndex='-1' onBlur={() => {
              setPictureOne(false)
          }} onClick={(e) => {
              if (e.target.classList[0] === "pictures__back" && window.innerWidth>991) {
              
                  let target = e.target.closest('.col-12').querySelector('img').getAttribute('src')
                  setPictureOne(target)
         
                          }
                        }} className="row">
            {  !pictureOne && <>
              <div className="col-12 col-lg-6 col-xl-4  px-xl-4 px-md-3 mb-5">
                  <div className="pictures__wrapper">
                      <img  className="pictures__img" src={fiction} alt="" />
                      <div className="pictures__back"></div>
                      </div>
              </div>
              

              <div className="col-12 col-lg-6 col-xl-4  px-xl-4 px-md-3 mb-5">
              <div className="pictures__wrapper">
                      <img  className="pictures__img" src={fiction1} alt="" />
                      <div className="pictures__back"></div>
                      </div>
              </div>
              

              <div className="col-12 col-lg-6 col-xl-4  px-xl-4 px-md-3 mb-5">
              <div className="pictures__wrapper">
                      <img  className="pictures__img" src={fiction2} alt="" />
                      <div className="pictures__back"></div>
                      </div>
              </div>
              


              <div className="col-12 col-lg-6 col-xl-4  px-xl-4 px-md-3 mb-5">
              <div className="pictures__wrapper">
                      <img  className="pictures__img" src={fiction2} alt="" />
                      <div className="pictures__back"></div>
                      </div>
              </div>
              

              <div className="col-12 col-lg-6 col-xl-4  px-xl-4 px-md-3 mb-5">
              <div className="pictures__wrapper">
                      <img  className="pictures__img" src={fiction1} alt="" />
                      <div className="pictures__back"></div>
                      </div>
              </div>
              

              <div className="col-12 col-lg-6 col-xl-4  px-xl-4 px-md-3 mb-5">
              <div className="pictures__wrapper">
                      <img  className="pictures__img" src={fiction2} alt="" />
                      <div className="pictures__back"></div>
                      </div>
                  </div></>}
              
              {pictureOne &&
              
              <div className="col-12 px-xl-4 px-md-3 mb-5 d-flex justify-content-center align-items-center">
              <img className="pictures__img_animation" src={pictureOne} alt="" />
                      </div>

}
      </div>
    </div>
  );
}

export default Pictures;
