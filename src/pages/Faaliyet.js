import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Boxer from "../components/boxer/Boxer";
import ContactBar from "../components/contactbar/ContactBar";

import head_data from './../data/head_data';
import { faaliyet_data } from './../data/faaliyet_data';
import "./faaliyet.scss";

const Faaliyetler = ({ data_fa }) => {
    return <>
        <div className='lf__whatfet section__margin' id='whatfet'>
             
            <div className='lf__whatfet-heading'>
               <h1>
                   Faaliyet Alanlarimiz
               </h1>
               <p>Bizi Kesfedin</p>
            </div>  
            <div className='lf__whatfet-container'>  
                          
                {data_fa.map((data, i) => {
                    return <div key={i}>
                            <Boxer 
                                data={ data } 
                           /> 
                          </div>                 
                    }
                )}
                
            </div>                    
        </div>
    </>
}

const Faaliyet = () => {
    return <>
            
            <Navbar />
            <Header 
                img= { head_data[1].img }
                text= { head_data[1].text }  
            />          
            
            <Faaliyetler data_fa={faaliyet_data} />
            <ContactBar />
            <Footer />
    </>;
};

export { Faaliyet, Faaliyetler };