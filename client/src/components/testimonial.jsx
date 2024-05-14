import React from "react";
import Slider from "react-slick";

import "../styles/testimonial.css";

import ava01 from "../assets/images/user.png";
import ava02 from "../assets/images/user.png";
import ava03 from "../assets/images/user.png";
import ava04 from "../assets/images/user.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
       I recently had the pleasure of experiencing exemplary service from VROOM CAR RENTAL. From the moment I reached out, their team demonstrated a level of dedication and professionalism that truly exceeded my expectations. Not only did they address my concerns promptly, but they also went above and beyond to ensure that I was completely satisfied with the outcome. Their attention to detail and commitment to customer satisfaction are truly commendable.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Devraj Khatri</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently had the pleasure of experiencing exemplary service from VROOM CAR RENTAL. From the moment I reached out, their team demonstrated a level of dedication and professionalism that truly exceeded my expectations. Not only did they address my concerns promptly, but they also went above and beyond to ensure that I was completely satisfied with the outcome. Their attention to detail and commitment to customer satisfaction are truly commendable.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Roman Maharjan</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently had the pleasure of experiencing exemplary service from VROOM CAR RENTAL. From the moment I reached out, their team demonstrated a level of dedication and professionalism that truly exceeded my expectations. Not only did they address my concerns promptly, but they also went above and beyond to ensure that I was completely satisfied with the outcome. Their attention to detail and commitment to customer satisfaction are truly commendable.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sarthak Neupane</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently had the pleasure of experiencing exemplary service from VROOM CAR RENTAL. From the moment I reached out, their team demonstrated a level of dedication and professionalism that truly exceeded my expectations. Not only did they address my concerns promptly, but they also went above and beyond to ensure that I was completely satisfied with the outcome. Their attention to detail and commitment to customer satisfaction are truly commendable.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sanskar Lamgade</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
