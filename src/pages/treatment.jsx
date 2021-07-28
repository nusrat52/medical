import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Afford from "../components/treatmentForComp/afford";
import Paymant from "../components/treatmentForComp/paymant";
import Insuarence from "../components/treatmentForComp/insuarence";
import Altogether from "../components/treatmentForComp/alltogether";
import Ages from "../components/treatmentForComp/ages";

function Travel() {
  return (
    <>
      <Navbar />
          <Afford />
      <Paymant />
      <Insuarence/>
      <Altogether/>
      <Ages/>

      <Footer/>
    </>
  );
}

export default Travel;
