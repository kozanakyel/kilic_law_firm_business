import React from "react";

import { BsTelephoneInbound, BsMailbox } from 'react-icons/bs';
import './contactbar.scss';

const info_contact = { 
    tel: '+905067458798', 
    email: 'info@kiliccetinkaya.com' 
}


const ContactBar = () => {
    return (<>
        <div className='contact-about'>
                <h3>ILETISIM: </h3>
                { /*<p><a href={ info_contact.tel }><BsTelephoneInbound size={16} color='#222222'/> { info_contact.tel } </a> </p> */}
                <p><a href={ info_contact.email }><BsMailbox size={16} color='#222222'/> { info_contact.email } </a> </p>
                <p>Adres: Muratpasa mah. yenimahalle sok no 20/4</p>
                
            </div>
    </>)
}

export default ContactBar;