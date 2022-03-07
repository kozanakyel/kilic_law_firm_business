import React from "react";
import { Link } from "react-router-dom";
import './boxer.scss';

const Boxer = ({ data }) => {
    return <>
    <div className='lf__fields-container__field'> 
        <Link to="/faaliyet" className="box-link" >
            <div className='lf__fields-container__field-image'>
                   <img src={data.img} alt='fieldimg' />
            </div>
            <div className='lf__fields-container__field-title'>
                    <div />         
                    <h1>{data.title}</h1>
            </div>    
            <div className='lf__fields-container__field-text'>
                   <p>{data.text} </p>
            </div>
        </Link>
    </div>
        
  
    </>;
};

export default Boxer;



