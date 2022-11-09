import React from 'react';
import img1 from '../../../assets/images/Devon_wedding_photographer_0018.jpg';
import img2 from '../../../assets/images/010-galway-downs-temecula-wedding-photography-1000x667.jpg';
import img3 from '../../../assets/images/Tareq-with-Xinat.jpg';
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
    return (
         <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 h-25"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption className='text-white'>
                  <h5>Wedding Photographer</h5>
                  <p>Not just another pretty dress.Your wedding is a personal story that we are there to document. </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption className='text-white'>
                  <h5>Wedding Photographer</h5>
                  <p>Not just another pretty dress.Your wedding is a personal story that we are there to document. </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
                <Carousel.Caption className='text-white'>
                  <h5>Wedding Photographer</h5>
                  <p>Not just another pretty dress.Your wedding is a personal storthat we are there to document. </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }
        
       
export default Slider;