import React from 'react';
import { Link } from "react-router-dom";

import './header.scss';


const Header = ( { img, text } ) => {

    const StyleHeader = {        
        backgroundImage: `url(${process.env.PUBLIC_URL + img})`        
   
    }

    return (
        <div style={ StyleHeader } className='lf__header sm_header section__padding'  id='home'>  
            <div className='lf__header-content' >
                
                <p>{ text }</p>
                <Link to="/iletisim" >
                <button>BIZE ULASIN</button>
                </Link>
                
            </div> 
            
        </div>
    )
}

export default Header