import React from "react";
import ContactBar from "../components/contactbar/ContactBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { BsFillTelephoneFill, BsMailbox2, } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

import head_data from './../data/head_data';
import './iletisim.scss';

const Contactmap = () => {
    return <>
         <div className="contact-container">
               
               <div className="contact-address-map">
                   <iframe 
                       title="This is address of law-firm"
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.096089601177!2d30.71279051569628!3d36.911966879925664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391e748b1597b%3A0x8e5e1755e185e39f!2zS8SxbMSxw6cmw4dldGlua2F5YSBIdWt1ayBCw7xyb3N1!5e0!3m2!1sen!2str!4v1646682191175!5m2!1sen!2str" 
                       width="400" 
                       height="350" 
                       style={{ border: "0", borderRadius: "20px" }}
                       allowFullScreen="" 
                       loading="lazy"></iframe>
               </div>
               <div className="contact-tel-mail">
                   {/**
                    * <div className="contact-tel">
                       <BsFillTelephoneFill size={32} />
                       <p>+905674839</p>
                      </div> 
                    * 
                    */}
                    
                   <div className="contact-mail">
                       <BsMailbox2 size={32} />
                       <p>info@kilic@gmail.com</p>
                   </div>   
                   <div className="contact-address">
                       <AiFillHome size={32} />
                       <p>Konuksever mah. Kızılırmak cad. H. Çoban İş Merkezi
                       No:135B/B K:4, D:14, 07040 Muratpaşa/Antalya</p>   
                       
                   </div> 
               </div>
           </div>   
    </>
}

const Iletisim = () => {
    return <>
        <Navbar />
        <Header 
            img= { head_data[3].img }
            text= { head_data[3].text }
        />
        <div className="contact-title-only">
            <h1>ILETISIM</h1>    
        </div> 
        <Contactmap />
        <ContactBar />
        <Footer />
    </>;
};

export default Iletisim;