import React from "react";
import { Link, Outlet } from "react-router-dom";
import './blogcard.scss';

const Blogcard = ({ article }) => {
    return <>
    <div className="lf__blog-container">
    <div className='lf__blog-container__blog'> 
        <Link to={`/makaleler/${article.id}`} key={article.id} className="blog-link" >
            <div className="blog-text-content">
                <div className='lf__blog-container__blog-text'>
                   <p>{article.date} </p>
                </div>
                <div className='lf__blog-container__blog-title'>
                    <div />         
                    <h1>{article.title}</h1>
                </div> 
                <div className='lf__blog-container__blog-text'>
                   <p>{article.subtext} </p>
                </div>
            </div>               
            
        </Link>
    </div>
    <Outlet />
    </div>
    
        
  
    </>;
};

export default Blogcard;