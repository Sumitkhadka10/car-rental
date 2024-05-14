import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {IoLocation} from "react-icons/io5";
import {BsTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {BiLogoFacebook, BiLogoLinkedin} from "react-icons/bi";
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {useLocation} from "react-router-dom";

const Footer = () => {

  const location = useLocation();

  return <>
    {
        !location.pathname.includes("admin") &&
        <footer id="footer" className="secondary-bg-color">
          <Container className="pt-3 pb-2">
            <Row>
              <Col>
                <h1 className="fs-1 text-center quinary-color">Rent a Car</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Subscribe Now</h4>

                    <p className="fs-6 text-white m-0 mb-1">Stay updated with the latest offers, 
                    promotions, and news from Vroom Car Rental by subscribing to our newsletter. 
                    Get exclusive deals delivered straight to your inbox and never miss out on savings 
                    or important updates again!</p>

                    <div className="form-group">
                      <Form.Control as="textarea" rows={1} placeholder="Enter Your Email"/>
                      <Button variant="primary" className="primary-bg-color border-0 w-100 mt-1">Subscribe</Button>
                    </div>
                  </Col>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Information</h4>
                    <p className="fs-6 text-white m-0">Find all the essential information about 
                    Vroom Car Rental here. From our company's mission and values to frequently 
                    asked questions and contact details, this section is your go-to resource 
                    for everything you need to know about renting with us.</p>
                  </Col>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Helpful Links</h4>
                    <p className="fs-6 text-white m-0">Explore additional resources and helpful links 
                    to enhance your rental experience with Vroom Car Rental. Whether you're 
                    looking for travel tips, local attractions, or assistance with managing 
                    your booking, you'll find useful information and resources right at your 
                    fingertips in this section of our website footer.</p>
                  </Col>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Contact Us</h4>
                    <p className="fs-6 text-white m-0">
                  <span>
                    <IoLocation className="header-line-2-icon"/>&nbsp;
                    <a href="https://www.google.com/search?q=herald+college+kathmandu+in+google+map&sca_esv=73778d81cd87c189&sca_upv=1&rlz=1C5CHFA_enNP1037NP1037&sxsrf=ADLYWIJdHtVShzst2TVPaC7RGK6dOIt41w%3A1715671458047&ei=ohFDZrbDAra84-EPmaeGgAo&ved=0ahUKEwi2nLuezoyGAxU23jgGHZmTAaAQ4dUDCBA&uact=5&oq=herald+college+kathmandu+in+google+map&gs_lp=Egxnd3Mtd2l6LXNlcnAiJmhlcmFsZCBjb2xsZWdlIGthdGhtYW5kdSBpbiBnb29nbGUgbWFwMggQIRigARjDBDIIECEYoAEYwwRIrC5Q_xhYhSpwAXgBkAEAmAHzAaABnA-qAQUwLjYuNLgBA8gBAPgBAZgCBqAC3AfCAg0QABiwAxjWBBhHGMkDwgINEAAYsAMYkgMY1gQYR8ICChAAGLADGNYEGEfCAg4QABiABBiwAxiSAxiKBcICCBAAGIAEGKIEwgIKECEYoAEYwwQYCpgDAIgGAZAGCZIHBTEuMy4yoAe9NQ&sclient=gws-wiz-serp&lqi=CiZoZXJhbGQgY29sbGVnZSBrYXRobWFuZHUgaW4gZ29vZ2xlIG1hcCIDiAEBSN6Msuv2lYCACFoyEAQQBRgAGAEYAiImaGVyYWxkIGNvbGxlZ2Uga2F0aG1hbmR1IGluIGdvb2dsZSBtYXCSAQ9wcml2YXRlX2NvbGxlZ2WqAWkKCC9tLzA0X3RiEAEqDiIKZ29vZ2xlIG1hcCgAMh8QASIbuMVJYARJSnlnonXHN0GQs68aU3DxbxDopmlWMioQAiImaGVyYWxkIGNvbGxlZ2Uga2F0aG1hbmR1IGluIGdvb2dsZSBtYXA#rlimm=7288955480325549545" 
                    target="_blank" className="text-white">Naxal, Kathmandu</a>

                  </span>
                      <br/>
                      <span>
                    <BsTelephoneFill size="0.9em" className="header-line-2-icon"/>&nbsp;
                        <a href="tel:+12126583916" target="_blank" className="text-white">082 521520</a>
                  </span>
                      <br/>
                      <span>
                    <GrMail className="header-line-2-icon"/>&nbsp;
                        <a href="mailto:info@rentacar" target="_blank" className="text-white">vroomcar@gmail.com</a>
                  </span>
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><BiLogoFacebook/></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><AiOutlineTwitter/></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><BiLogoLinkedin/></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><AiFillInstagram/></a></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
            </Row>
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
               © Copyright 2024, 
              Developed by Group C. All rights reserved.
              </p>
            </div>
          </Container>
        </footer>
    }
    </>
};
export default Footer;