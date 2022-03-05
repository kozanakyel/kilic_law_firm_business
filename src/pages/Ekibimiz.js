import React from "react";
import ContactBar from "../components/contactbar/ContactBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Slideshow from "../components/slideshow/SlideShow";

const Ekibimiz = () => {
    return <>
        <Navbar />
        <Header 
           img= '/images/lw2.jpg'  
        />
        <Slideshow />
        <ContactBar />
        <Footer />
    </>;
};

export default Ekibimiz;