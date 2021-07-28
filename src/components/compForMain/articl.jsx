import React from "react";
import { RightArrow } from "../compsObsh/svgs"
import image2 from "../../statics/image 2 (2).png"
import Button from "../compsObsh/button"
import element from "../../statics/element (1).png"
import bruise from "../../statics/Vector (1).png"
function Articl() {
  return (
    <>
      
    <div className="artikl containerSp ">
 
      <h1 className="artikl__header">Check out our latest article</h1>
      <div className="microsort__line mb-5"></div>
      </div>
      <div className="artikle__bruiseWrapper">
        <img className="artikle__bruise" src={bruise} alt="vruise" />
      </div>
      <div className="containerSp d-flex flex-column align-items-center">
          <div className="artikl__thrio ">
          <div className="artikle__element">
        <img src={element} alt="element" />

</div>
              
        <div className="artikleItem">
          <img className="artikleItem__img" src={image2} alt="artikleItem__img" />
<div className="artikleItem__partTwo">
                  <h1 className="artikleItem__header">In Vitro Fertilization</h1>
                  

                  <p className='artikleItem__text'>In Vitro Fertilization is a technique of reproduction that occurs under laboratory conditions when self-conception does Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum suscipit aliquam similique velit quod eaque. Voluptatibus veritatis aliquam praesentium aut consectetur nobis incidunt at delectus a. Nesciunt, expedita libero!</p>
<div className="d-flex align-items-center">
                  <a className="artikleItem__ancor" href="#">Read more</a>
<RightArrow/>
</div>                
              </div>
              </div>






              <div className="artikleItem">
          <img className="artikleItem__img" src={image2} alt="artikleItem__img" />
<div className="artikleItem__partTwo">
                  <h1 className="artikleItem__header">In Vitro Fertilization</h1>
                  

                  <p className='artikleItem__text'>In Vitro Fertilization is a technique of reproduction that occurs under laboratory conditions when self-conception does ...</p>
<div className="d-flex align-items-center">
                  <a className="artikleItem__ancor" href="#">Read more</a>
<RightArrow/>
</div>                
              </div>
              </div>




              <div className="artikleItem">
          <img className="artikleItem__img" src={image2} alt="artikleItem__img" />
<div className="artikleItem__partTwo">
                  <h1 className="artikleItem__header">In Vitro Fertilization</h1>
                  

                  <p className='artikleItem__text'>In Vitro Fertilization is a technique of reproduction that occurs under laboratory conditions when self-conception does ...</p>
<div className="d-flex align-items-center">
                  <a className="artikleItem__ancor" href="#">Read more</a>
<RightArrow/>
</div>                
              </div>
              </div>


          </div>
          



<Button content="View all" color="white"/>




      </div>
      </>
  );
}

export default Articl;
