import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { Faaliyetler } from "./Faaliyet";

import "./home.scss";
import Slideshow from "../components/slideshow/SlideShow";
import ContactBar from "../components/contactbar/ContactBar";
import Blogcard from "../components/blogcard/Blogcard";

import head_data from "./../data/head_data";
import { faaliyet_data_sm } from "../data/faaliyet_data";
import articles from "../data/articles_content";


import React, { useState } from "react";


const About = () => {
  return (  
    
    <>
      {/**
     <select value={lang} onChange={handleChange}>
        {languages.map(item => {
            return (<option key={item.value} 
            value={item.value}>{item.text}</option>);
        })}
    </select>
     */}

      <div className="lf__aboout section__padding" id="about">
        <div className="lf__about-heading">
          <div id="imge"></div>
          <h1>HAKKIMIZDA</h1>
        </div>
        <div className="contain-fpart">
          <div className="lf__about-fpart">
            <p>
              Kılıç & Çetinkaya Hukuk Ofisi 2018 yılında Avukat Abdulkadir
              Çetinkaya ve Avukat Kubilay Yasin Kılıç işbirliği ile avukat
              ortaklığı şeklinde Antalya’da kurulmuştur. Genç ve dinamik kadrosu
              sayesinde bireysel ve kurumsal müvekkillerimizin ihtiyaçları
              doğrultusunda en iyi sonuca en kısa zamanda ulaşma gayesiyle
              çalışmaktayız.
            </p>
            <p>
              Avukat Abdulkadir Çetinkaya 2016 yılında Akdeniz Üniversitesi
              Hukuk fakültesinden mezun olmuştur. Öğrencilik yıllarında başlayan
              Antalya serüvenine meslek hayatını da ekleyerek stajını Antalya
              barosunda tamamlamıştır. Avukat Kubilay Yasin Kılıç 2017 Yılında
              Süleyman Demirel Üniversitesi Hukuk fakültesinden mezun olmuştur.
              Meslek hayatını Antalya’da sürdürmek isteyen Kubilay Yasin
              Kılıç’ta stajını Antalya Barosunda tamamlamış ve mesleğini
              Antalya’da icra ettirmektedir.
            </p>
            <p>
              Ofisimiz ağırlıklı olarak icra-iflas dosyaları ve şirket
              danışmanlığı ile ilgilenmektedir. Referanslarımızda da yer alan
              çok sayıda firma için gerek icra-iflas hukuku gerekse hukuki
              danışmanlık hizmeti verilmektedir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {


  return (
    <>
      <Navbar />
      
      <Header img={head_data[2].img} text={head_data[2].text} />

      <About />
      <Faaliyetler data_fa={faaliyet_data_sm} />
      <Slideshow />
      <div className="article-entry-title">
        <h1>{"Makalelerimiz"}</h1>
      </div>
      <div className="home-blog-card">
        {articles.map((article, i) => {
          return (
            <div key={i}>
              <Blogcard article={article} />
            </div>
          );
        })}
      </div>

      <ContactBar />
      <Footer />
    </>
  );
};

export default Home;
