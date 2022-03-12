import React from "react";
import ContactBar from "../components/contactbar/ContactBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

import './ekibimiz.scss';
import head_data from './../data/head_data';
import staff_info from './../data/staff_info'; 
import Staff from "../components/staff/Staff";


const Ekibimiz = () => {
    return <>
        <Navbar />
        <Header 
           img= { head_data[0].img }
           text= { head_data[0].text }  
        />
        <div className="ekip__container">
            <div className="ekip__container-header">
                <h1>EKIBIMIZ</h1>
            </div>
            <div className="ekip__container-cards">
                {staff_info.map((staff, i) => {
                    return <div key={i}>
                        <Staff 
                            staff={ staff }
                        />
                        </div>                
                    }
                 )}
            </div>
        </div>
        <ContactBar />
        <Footer />
    </>;
};

export default Ekibimiz;