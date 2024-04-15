import React from "react";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../UI/aboutsection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/cars-img/vi.png";
import OurMembers from "../UI/ourmember";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                VROOM Car Rental is your ultimate destination for hassle-free and unforgettable car rental experiences. 
                We understand the importance of freedom and flexibility when it comes to exploring new destinations, 
                and we strive to provide top-notch services to ensure your journey is smooth, enjoyable, and memorable.
                </p>

                <p className="section__description">
                At VROOM Car Rental, we offer a diverse range of vehicles to suit your needs, whether it's a compact car for city exploration, a spacious SUV for family adventures, or a luxurious sedan for business travel. Our fleet consists of well-maintained and modern vehicles, ensuring both comfort and reliability on the road.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+9779813000000</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
