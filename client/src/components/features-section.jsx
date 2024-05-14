import React from 'react';

import {Container, Row, Col} from "react-bootstrap";

import {AiOutlineSafety} from "react-icons/ai";
import {HiOutlineStatusOnline} from "react-icons/hi";
import {BiSolidOffer} from "react-icons/bi";


const FeaturesSection = () => {
    return (
    <div id="features-section">
        <Container className="py-5">
            <Row>
                <Col>
                  <h1 className="quinary-color fs-1 p-0 mb-4">WHY CHOOSE US</h1>
                </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <AiOutlineSafety size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Safety &amp; Security</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Your safety is our priority. We ensure top-notch 
                security measures for worry-free travels. From regular maintenance checks 
                to comprehensive insurance coverage, trust us for a secure rental experience.</p>
              </Col>
              <Col xs={4}>
                <HiOutlineStatusOnline size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Online Booking</h4>
                <p className="quinary-color fs-6 m-0 pb-2 ">Convenience at your fingertips! With our 
                seamless online booking platform, renting a car has never been easier. 
                Simply browse, select, and book your vehicle hassle-free, anytime, anywhere.</p>
              </Col>
              <Col xs={4}>
                <BiSolidOffer size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Best Offers</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Unlock unbeatable deals with Vroom Car 
                Rental! Enjoy exclusive discounts, special packages, and seasonal promotions 
                tailored to fit your budget. Get the best value for your money every time you choose us.</p>
              </Col>
            </Row>
        </Container>
    </div> 
    );
};
export default FeaturesSection;