import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Boxer from "../components/boxer/Boxer";
import ContactBar from "../components/contactbar/ContactBar";

import head_data from './../data/head_data';
import faaliyet_data from './../data/faaliyet_data';
import "./faaliyet.scss";

const Faaliyetler = () => {
    return <>
        <div className='lf__whatfet section__margin' id='whatfet'>
             
            <div className='lf__whatfet-heading'>
               <h1>
                   Faaliyet Alanlarimiz
               </h1>
               <p>Bizi Kesfedin</p>
            </div>  
            <div className='lf__whatfet-container'>  
                          
                {faaliyet_data.map((data, i) => {
                    return <Boxer 
                                img={data.img}
                                title={data.title}
                                text={data.text} 
                        />                  
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
            
            <Faaliyetler />
            <ContactBar />
            <Footer />
    </>;
};

export { Faaliyet, Faaliyetler };