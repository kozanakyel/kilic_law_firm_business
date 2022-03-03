import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <div className='lf__header section__padding' id='home'>  
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