import React from 'react';
import { Link } from "react-router-dom";

import './header.scss';


const Header = ( { img } ) => {

    const StyleHeader = {        
        backgroundImage: `url(${process.env.PUBLIC_URL + img})`        
   
    }

    return (
        <div style={ StyleHeader } className='lf__header sm_header section__padding'  id='home'>  
            <div className='lf__header-content' >
                
                <p>"Hukukun kuvvetinin azaldığı yerde, kuvvetlinin hukuku geçerli olmaya başlar."
                    Maurice DUVERGER 
                </p>
                <Link to="/iletisim" >
                <button>BIZE ULASIN</button>
                </Link>
                
            </div> 
            
        </div>
    )
}

export default Header