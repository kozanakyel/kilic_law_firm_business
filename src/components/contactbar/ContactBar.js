import React from "react";

import { BsTelephoneInbound, BsMailbox } from 'react-icons/bs';
import './contactbar.scss';

const ContactBar = () => {
    return (<>
        <div className='contact-about'>
                <h3>ILETISIM: </h3>
                <p><a href="tel:+905067458798"><BsTelephoneInbound size={16} color='#222222'/> 05067458798</a> </p>
                <p><a href="mailto:info@kiliccetinkaya.com"><BsMailbox size={16} color='#222222'/> info@kiliccetinkaya.com</a> </p>
                <p>Adres: Muratpasa mah. yenimahalle sok no 20/4</p>
                
            </div>
    </>)
}

export default ContactBar;