import React from "react";
import ContactBar from "../components/contactbar/ContactBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

import head_data from './../data/head_data';

const Iletisim = () => {
    return <>
        <Navbar />
        <Header 
            img= { head_data[3].img }
            text= { head_data[3].text }
        />
        <ContactBar />
        <Footer />
    </>;
};

export default Iletisim;