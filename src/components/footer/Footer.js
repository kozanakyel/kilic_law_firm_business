import React from 'react';
import './footer.scss';
import f_img from './../../assets/ame_law.jpg';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={f_img} alt="gpt3_logo" />
        <h3>Kilic&Cetinkaya </h3>
        <h5>Avukatlik Burosu</h5> 
        <p>Iletisim</p>
        
        <p> 085-132567</p>
        <p>info@kiliccetinkaya.net</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Adres</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Bilgi</h4>
        <p>Terms & Conditions t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        
      </div>
      
    </div>
  </div>
);
export default Footer;