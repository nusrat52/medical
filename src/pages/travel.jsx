import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Near from "../components/travel/near"
import Works from "../components/travel/works"
import Traveller from "../components/travel/traveller"
import Monitoring from "../components/travel/monitoring"
function Travel() {
    return (
        <>
            <Navbar />
            <Near />
            <Works />
            <Traveller/>
            <Monitoring/>
            <Footer/>
        </>
    )
}

export default Travel
