import React from 'react';
import img1 from '../../../assets/images/shutterstock_483957421.webp';
import img2 from '../../../assets/images/pexels-asad-photo-maldives-169203.jpg';
import img3 from '../../../assets/images/pexels-ankur-kumar-3872626.jpg';
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
                  <h5 className='text-blue-600 lg:text-5xl text-xl '>Wedding Photographer</h5>
                  <p className='text-blue-600 lg:text-2xl '>Not just another pretty dress.Your wedding is a personal story that we are there to document. </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption className='text-white'>
                  <h5 className='text-blue-600 lg:text-5xl text-xl'>Wedding Photographer</h5>
                  <p className='text-blue-600 lg:text-2xl'>Not just another pretty dress.Your wedding is a personal story that we are there to document. </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
                <Carousel.Caption className='text-white'>
                  <h5 className='text-blue-600 lg:text-5xl text-xl'>Wedding Photographer</h5>
                  <p className='text-blue-600 lg:text-2xl'>Not just another pretty dress.Your wedding is a personal storthat we are there to document. </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }
        
       
export default Slider;