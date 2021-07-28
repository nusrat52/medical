import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Contact from "../components/compForMain/contact";
import Fagsfirst from "../components/compsforfags/fagsFirst";
import Body from "../components/compsforfags/fagsBody";
function Fags() {
  return (
    <>
      <Navbar />
          <Fagsfirst />
          <Body/>
      
          
      <Contact/>
      <Footer/>
    </>
  );
}

export default Fags;
