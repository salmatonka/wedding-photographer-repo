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
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }
        
       
export default Slider;