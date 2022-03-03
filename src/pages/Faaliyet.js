import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Boxer from "../components/boxer/Boxer";
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
                <Boxer title='CEZA HUKUKU' text='Ceza hukuku, suçun unsurları, şartları ve yaptırımlarını düzenleyen kamu hukuku dalıdır.' />
                <Boxer title='MİRAS HUKUKU' text='Miras hukuku, gerçek kişilerin ölümü sonucu onlara ait mal varlığını inceleyen hukuk dalıdır.' />
                <Boxer title='AİLE HUKUKU' text='Aile hukuku, aileye ilişkin konularla ilgilenen, medeni hukuk içinde yer alan özel hukuk dalıdır.' />
                
                
            </div>                    
        </div>
    </>
}

const Faaliyet = () => {
    return <>
            <Navbar />
            <Header />
            
            <Faaliyetler />
            <Footer />
    </>;
};

export { Faaliyet, Faaliyetler };