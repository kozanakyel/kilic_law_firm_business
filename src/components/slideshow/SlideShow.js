import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import './slideshow.scss';
import staff_info from '../../data/staff_info';

const slideImages = [
  'images/staff_img/p1.jpg',
  'images/staff_img/p2.jpg',
  'images/staff_img/p3.jpeg'
];

const Eachslide = ({ staff }) => {
    return <>
        <div className="each-slide">
            <div className='img-content' style={{'backgroundImage': `url(${process.env.PUBLIC_URL + staff.img})` }}>
                <span>{staff.name}</span>
                <span>{staff.role}</span>
            </div>
        </div>
    </>
}

const Slideshow = () => {
    return (<>
            <div className='ekip-container'>
                <div className='ekibimiz_3'>
                    <div className='ekip_text'>
                        <h1>EKIBIMIZ</h1>
                        <p>Uzman personelimiz ile tum adalet arayislarinizda her daim yaninizda olmak istiyoruz.</p>
                    </div>
                    
                
                <div className="slide-container">
                    <Slide easing="ease" style={{'justifyContent': `center`, 'alignItems': 'center'}}>
                        {staff_info.map((staff, i) => {
                                return <Eachslide staff={ staff } />                  
                            }
                        )}
                        
                    </Slide>
                </div>       
                </div>
            </div>
            </>)
}

export default Slideshow;