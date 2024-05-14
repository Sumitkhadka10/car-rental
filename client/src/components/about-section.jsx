import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import AboutImage from '../assets/images/about-image.png'


const AboutSection = () => {
    return (
    <div id="about-section">
     <Container>
        <Row className="mt-1 mb-2">
          <Col xs={{span:12, order:"last"}} md={{span:6, order:"first"}}>
            <div className="image_iman">
                <img src={AboutImage} className="about_img" />
            </div>
          </Col>
          <Col xs={{span:12, order:"first"}} md={{span:6, order:"last"}}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                  About <span className="primary-color">Us</span>
              </h1>
              <p className="about-text fs-5 m-0">
              ROOM Car Rental is your ultimate destination for hassle-free and unforgettable car rental experiences. 
                We understand the importance of freedom and flexibility when it comes to exploring new destinations, 
                and we strive to provide top-notch services to ensure your journey is smooth, enjoyable, and memorable. At VROOM Car Rental, we offer a diverse range of vehicles to suit your needs, whether it's a compact car for city exploration, a spacious SUV for family adventures, or a luxurious sedan for business travel. Our fleet consists of well-maintained and modern vehicles, ensuring both comfort and reliability on the road.              </p>
              <div className="mt-3">
                  <a href="#" className="readmore-btn fs-5 px-3 py-2">Read More</a>
              </div>
            </div>
          </Col>
        </Row>
     </Container>
    </div>
    );
    };
    export default AboutSection;