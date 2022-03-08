import React from 'react';
import './footer.scss';
import f_img from './../../assets/ame_law.jpg';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
    <div className="gpt3__footer-links_header">
        <h1>KILIC&CETINKAYA</h1>
        <h3>HUKUK BUROSU</h3>
        <p>Terms & Conditions t is a long ontent here', making it look like ontent here', making it look like r readable English.</p>
        
      </div>
    </div>

    <div className="gpt3__footer-links">

      <div className="gpt3__footer-links_logo">
        <img src={f_img} alt="gpt3_logo" />
        <h3></h3>
        <h5></h5> 
        <p>Iletisim</p>
        
        <p> 085-132567</p>
        <p>info@kiliccetinkaya.net</p>
      </div>

      <div className="gpt3__footer-links_div">
          <h4>Adres/Konum</h4>
          <iframe 
            title="This is address of law-firm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.096089601177!2d30.71279051569628!3d36.911966879925664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391e748b1597b%3A0x8e5e1755e185e39f!2zS8SxbMSxw6cmw4dldGlua2F5YSBIdWt1ayBCw7xyb3N1!5e0!3m2!1sen!2str!4v1646682191175!5m2!1sen!2str" 
            width="230" 
            height="230" 
            style={{ border: "0", borderRadius: "15px" }}
            allowfullscreen="" 
            loading="lazy">
          </iframe>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Faydali Linkler</h4>
        <a href='https://www.adalet.gov.tr/' alt='adalet_bakanligi'>Adalet Bakanligi</a>
        <a href='https://www.barobirlik.org.tr/' alt='barolar birligi'>Turkiye Barolar Birligi</a>
        <a href='https://vatandas.uyap.gov.tr/main/vatandas/' alt='uyap'>Uyap Vatandaslik</a>
        <a href='https://www.antalyabarosu.org.tr/' alt='antalya_baro'>Antalya Barolar Birligi</a>
      </div>
      
    </div>
  </div>
);
export default Footer;