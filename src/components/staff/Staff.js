import React from "react";
import { BsMailbox } from 'react-icons/bs';

import './staff.scss';

const Staff = ({ staff }) => {
    return <>
    <div className='staff-container'>
         <div className='staff-img'>
             <img src={process.env.PUBLIC_URL + staff.img} alt="staff_image" />
         </div>
         <div className="staff-info">
             <div className="staff-name">
                 <h3>{staff.name}</h3>
                 <p>{staff.role}</p>
                 <p className="staff-cv">{staff.cv_review}</p>
                 <p><span><BsMailbox /> {staff.mail}</span></p>
             </div>
         </div>
        
    </div>
        
  
    </>;
};

export default Staff;
