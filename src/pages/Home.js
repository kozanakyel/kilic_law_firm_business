import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { Faaliyetler } from "./Faaliyet";

import "./home.scss";
import Slideshow from "../components/slideshow/SlideShow";
import ContactBar from "../components/contactbar/ContactBar";
import Blogcard from "../components/blogcard/Blogcard";

import head_data from './../data/head_data';
import { faaliyet_data_sm } from "../data/faaliyet_data";
import articles from "../data/articles_content";


const About = () => {
    return <>
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
                    source. 
                    </p>
                </div>
            </div>
        </div>
    
    </>
}


const Home = () => {
    return (
        <>
            <Navbar />
            <Header 
                img= { head_data[2].img }
                text= { head_data[2].text }
            />
            
            <About />
            <Faaliyetler data_fa={ faaliyet_data_sm }/>
            <Slideshow />
            <div className="article-entry-title">
                <h1>Makalelerimiz</h1>
            </div>
            <div className="home-blog-card">
            {articles.map((article, i) => {
                return <div key={i}>
                        <Blogcard 
                        article={ article }
                       />
                      </div>                
                }
            )}
            
            </div>
            
            <ContactBar />
            <Footer />
        </>
    );
};

export default Home;