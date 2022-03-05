import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slideshow.scss';

const slideImages = [
  'images/p1.jpg',
  'images/p2.jpg',
  'images/p3.jpeg'
];

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
                        <div className="each-slide">
                            <div className='img-content' style={{'backgroundImage': `url(${process.env.PUBLIC_URL + slideImages[0]})` }}>
                            <span>Kadir CETINKAYA</span>
                                <span>Avukat</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className='img-content' style={{'backgroundImage': `url(${process.env.PUBLIC_URL + slideImages[1]})`}}>
                                <span>Kadir CETINKAYA</span>
                                <span>Avukat</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className='img-content' style={{'backgroundImage': `url(${process.env.PUBLIC_URL + slideImages[2]})`}}>
                                <span>Kadir CETINKAYA</span>
                                <span>Avukat</span>
                            </div>
                        </div>
                    </Slide>
                </div>       
                </div>
            </div>
            </>)
}

export default Slideshow;