import React from "react";
import hth from "../../statics/treatment/hth.png";
import nalo from "../../statics/treatment/nalo.png";
import pomco from "../../statics/treatment/pomco.png";
import starmarl from "../../statics/treatment/startmarl.png";
import flag from "../../statics/treatment/flag.png";

function Insuarence() {
  return (
      <div className="insuarence ">
          <div className="containerSp">
      <h1 className="insuarence__header">Accepted Insurance</h1>
      <p className="insuarence__text">
        Our extensive network of accepted insurance providers covers around 50%
        of our patients (either partially or in full). Remember, your specific
        insurance plan is more important than your insurance provider as each
        company has many plans (some cover treatment and others do not).
          </p>
          
              
              <div className="d-flex justify-content-around align-items-center flex-column flex-xl-row mb-0 mb-xl-5">
                  <img className='mb-5 mb-xl-0' src={nalo} alt="insuarence" />
                  <img className='mb-5 mb-xl-0' src={starmarl} alt="insuarence" />
    </div>
    <div className="d-flex justify-content-between align-items-center flex-column flex-xl-row">
                  <img className='mb-5 mb-xl-0' src={hth} alt="insuarence" />
                  <img className='mb-5 mb-xl-0' src={pomco} alt="insuarence" />
                  <img className='mb-5 mb-xl-0' src={flag} alt="insuarence" />
    </div>
    



          </div>
    </div>
  );
}

export default Insuarence;
