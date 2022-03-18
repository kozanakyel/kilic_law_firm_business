import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

import head_data from './../data/head_data';
import './etahsilat.scss';


const Etbutton = () => {
    const et_style ={
        display: 'block',
        width: '300px',
        height: '120px',
        textDecoration: 'none',
        color: '#444',
        backgroundImage: 'url(https://pos.param.com.tr/Tahsilat/images/etahsilat.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        font:'bold 13px Tahoma',
        padding: '12px 10px 30px 105px'

    }

    return <>
    
        <div className="et-container">
            <div className="et-content">
                <h3>E-Tahsilat</h3>
                <p>E-Tahsilat sistemi dava ve dosya borcunuzu, masraf ödemelerinizi , dava ve 
                    takiplerden doğan  masraf avansınızı ve sair  ödemelerinizi kredi kartınızla 
                    gerçekleştirebileceğiniz en güvenli sistemdir . Tüm hukuki işlemleriniz için 
                    ödemelerinizi banka hesabımıza  eft ve havale yolu yapabileceğiniz gibi, 
                    E-Tahsilat sistemi alternatif olarak  kredi kartınıza en uygun taksitlendirme 
                    seçeneklerini sunabilen  güvenli ve hızlı bir yöntemdir.</p>
            </div>
            <div className="et-button">
                <a  style={ et_style } 
                    href="https://pos.param.com.tr/Tahsilat/Default.aspx?k=b153b8d7-4f93-4af8-ae95-bf989d2fdfb7" 
                    target="_blank" 
                    rel="noreferrer">
                    ÇETİNKAYA HUKUK
                    <br />
                    ÖDEME YAPMAK İÇİN TIKLAYINIZ
                </a>
            </div>
            <div className="et-content">
                <p>E-Tahsilat sistemi ile tüm ödemelerinizi, TURK Elektronik Para ve Ödeme Sistemleri güvencesi
                     ile  anlaşmalı bankalara ait kredi kartınızla gerçekleştirebilirsiniz.

                    E-Tahsilat sistemi üzerinden; İcra ve dava borç ödemeleri ,masrafları, Avukatlık Ücreti ve diğer 
                    yargı giderleri, tek ödeme ve taksitler halinde, güvenlik sorunu  olmadan, 3D güvenlik uygulaması ile  ödenebilmektedir. Ödemeyi  yapacağınız  kredi kartına göre taksit ve komisyon oranları değişim gösterebilmektedir. Sistemde bulunan bankalar ile anlaşmalar, Türkiye Barolar Birliği tarafından yapılmış olup, faiz ve komisyon oranlarına dair  tüm değişiklikler, aynı zaman doğrultusunda sisteme yansımaktadır.</p>
            </div>

        </div>
    </>

}

const Etahsilat = () => {

    

    return <>
        <Navbar />
        <Header 
          img= { head_data[5].img }
          text= { head_data[5].text }   
        />
        <Etbutton />
        <Footer />
    
    </>
}

export default Etahsilat;