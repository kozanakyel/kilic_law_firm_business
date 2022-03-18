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
                    <p>Ofisimiz Antalya’da olup Burdur, Isparta, Denizli ve Türkiye’nin 
                        diğer önemli ticari merkezlerindeki bürolarla işbirliği yapmaktayız.
                    Büromuz, bireysel ve kurumsal müvekkillerine, ceza davaları, ticaret hukuku, 
                    enerji hukuku, rekabet hukuku, aile hukuku (boşanma, miras, mal paylaşımı, velayet, nafaka, 
                    soy bağı davaları vs.), 
                    iş hukuku, tazminat davaları, icra takipleri gibi alanlarda danışmanlık ve dava takip hizmeti sunmaktadır.
                    Ofis olarak müvekkillerimizin başarısını, kendi başarımızdan öncelikli tutarız. Müvekkillerimizin değişen ihtiyaçlarına daha doğru ve etkin bir şekilde cevap verebilmek için onların faaliyet gösterdiği sektörlerdeki gelişmeleri yakından takip eder, bu sektörlerde sadece hukuki değil ticari bilgileri de edinerek bilgilerimizi derinleştiririz. Bu amaçlarla ulusal ve uluslararası mesleki ve ticari dernek ve 
                     kuruluşların çalışmalarına etkin olarak katılır, bilgi ve tecrübelerimizi paylaşarak katkıda bulunuruz.
                    Büromuz, hizmetlerini müvekkillerimizin değişen ihtiyaçlarına uygun olarak geliştirmeye ve yenilikçi, 
                    kaliteli hizmetler sunmaya kararlıdır 
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