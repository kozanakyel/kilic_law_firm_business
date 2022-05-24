import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import ContactBar from "../components/contactbar/ContactBar";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router";

import head_data from './../data/head_data';
import articles from "../data/articles_content";
import './makaleler.scss';

const Makale = ({ article }) => {
    return <>
            <div className="article-container">
                <div className="article-title">
                    <div />
                    <h1>{ article.title }</h1>
                </div>   
                <div className="article-date">
                    <p>{ article.date }</p>    
                </div>
                <div className="article-text">
                    <p>{ article.content }
                    </p>
                </div>
                <div className="article-writer">
                    <p>{ article.writer }</p>
                </div>
                
            </div>
    
          </>
}

const getArticle = (id) => {
    return articles.find((article) => article.id === id);
}



const Makaleler = () => {
    let param = useParams();
    let article = getArticle(parseInt(param.makalelerId, 10));

   

    return <>
        <Navbar />
        <Header 
          img= { head_data[4].img }
          text= { head_data[4].text }   
        />
    
        <Makale 
            article={ article }
        />
        
        <ContactBar />
        <Footer />
        
    </>;
};

export { Makaleler, Makale };