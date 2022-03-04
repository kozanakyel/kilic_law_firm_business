import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { Faaliyetler } from "./Faaliyet";

import { BsTelephoneInbound, BsMailbox } from 'react-icons/bs';
import "./home.scss";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header 
                img= '/images/bg-law1.jpeg' 
            />
            <div className='contact-about'>
                <h3>ILETISIM: </h3>
                <p><a href="tel:+905067458798"><BsTelephoneInbound size={16} color='#222222'/> 05067458798</a> </p>
                <p><a href="mailto:info@kiliccetinkaya.com"><BsMailbox size={16} color='#222222'/> info@kiliccetinkaya.com</a> </p>
                <p>Adres: Muratpasa mah. yenimahalle sok no 20/4</p>
                
            </div>
            <div className='lf__aboout section__padding' id='about'> 
            
            <div className='lf__about-heading'>
                <div id="imge"></div>
                <h1>HAKKIMIZDA</h1>                
            </div>
            <div className="contain-fpart">
            <div className='lf__about-fpart'>
                <h3>What is Lorem Ipsum?</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random 
                    text. It has roots in a piece of classical Latin literature 
                    from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, consectetur, 
                    from a Lorem Ipsum passage, and going through the cites of 
                    the word in classical literature, discovered the undoubtable 
                    source. </p>
                
            </div>
            
            </div>
            
            </div>
            <Faaliyetler />
            <Footer />
        </>
    );
};

export default Home;