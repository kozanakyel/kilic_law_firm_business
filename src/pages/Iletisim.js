import React from "react";
import ContactBar from "../components/contactbar/ContactBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Iletisim = () => {
    return <>
        <Navbar />
        <Header
           img= '/images/law3.jpeg'  
        />
        <ContactBar />
        <Footer />
    </>;
};

export default Iletisim;