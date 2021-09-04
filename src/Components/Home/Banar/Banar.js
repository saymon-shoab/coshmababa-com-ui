import React from 'react';
import { Carousel } from 'react-bootstrap';

import slide4 from './../../../Images/slide04.jpg'
import slide5 from './../../../Images/slide05.jpg'
import slide6 from './../../../Images/slide06.jpg'


const Banar = () => {
    return (
        <div>
            <Carousel>
 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide6}
                alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide5}
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide4}
                alt="First slide"
                />
            
            </Carousel.Item>

</Carousel>
        </div>
    );
};

export default Banar;