import React from 'react'
import Navbar from "../components/navbar/navbar"
import element from "../statics/element.png"
import Section1 from "../components/compForMain/mainSecOne"
import Team from "../components/compForMain/team"
import Selction from "../components/compForMain/genderSelection"
import Advices from "../components/compForMain/advices"
import Reklam from "../components/compForMain/reklam"
import Artikl from "../components/compForMain/articl"
import Pictures from "../components/compForMain/pictures"
import Contact from "../components/compForMain/contact"
import Footer from "../components/footer/footer"
function Main() {
    return (
        <>
            <Navbar />
            <img className="main__element" src={element} alt="element" />
            <Section1 />
            <Team/>

<Selction/>

<Advices/>
<Reklam/>
<Artikl/>
<Pictures/>

<Contact/>
<Footer/>






        </>
    )
}

export default Main
