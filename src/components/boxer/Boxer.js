import React from "react";
import { Link } from "react-router-dom";
import law_big from '../../assets/ame_law.jpg';
import './boxer.scss';

const Boxer = ({ img, title, text }) => {
    return <>
    <div className='lf__fields-container__field'> 
        <Link to="/faaliyet" className="box-link" >
            <div className='lf__fields-container__field-image'>
                   <img src={img} alt='fieldimg' />
            </div>
            <div className='lf__fields-container__field-title'>
                    <div />         
                    <h1>{title}</h1>
            </div>    
            <div className='lf__fields-container__field-text'>
                   <p>{text} </p>
            </div>
        </Link>
    </div>
        
  
    </>;
};

export default Boxer;



