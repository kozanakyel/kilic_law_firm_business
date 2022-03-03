import React from "react";
import law_big from '../../assets/ame_law.jpg';
import './boxer.scss';

const Boxer = ({ title, text }) => {
    return <>
    <div className='lf__fields-container__field'> 
            <div className='lf__fields-container__field-image'>
               <img src={law_big} />
            </div>
            <div className='lf__fields-container__field-title'>
                <div />
                <h1>{title}</h1>
            </div>    
            <div className='lf__fields-container__field-text'>
               <p>{text} </p>
            </div>
            
                        
        </div>
        
  
    </>;
};

export default Boxer;



