import React from "react";
import ContactBar from "../components/contactbar/ContactBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Slideshow from "../components/slideshow/SlideShow";
import head_data from './../data/head_data';

const Ekibimiz = () => {
    return <>
        <Navbar />
        <Header 
           img= { head_data[0].img }
           text= { head_data[0].text }  
        />
        <Slideshow />
        <ContactBar />
        <Footer />
    </>;
};

export default Ekibimiz;