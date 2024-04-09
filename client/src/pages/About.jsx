import React from 'react';
import aboutImage from '../assets/all-images/cars-img/OFFER.png';
import hotOffersImage from '../assets/all-images/cars-img/nissan-offer.png';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-heading">VROOM Car Rental</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
        <div className="about-text">
          <h2 className="about-heading">About VROOM Car Rental</h2>
          <p className="about-description">
            VROOM Car Rental is your ultimate destination for hassle-free and unforgettable car rental experiences. We understand the importance of freedom and flexibility when it comes to exploring new destinations, and we strive to provide top-notch services to ensure your journey is smooth, enjoyable, and memorable.
          </p>
          <p className="about-description">
            At VROOM Car Rental, we offer a diverse range of vehicles to suit your needs, whether it's a compact car for city exploration, a spacious SUV for family adventures, or a luxurious sedan for business travel. Our fleet consists of well-maintained and modern vehicles, ensuring both comfort and reliability on the road.
          </p>
          <p className="about-description">
            Our dedicated team of professionals is committed to providing exceptional customer service, guiding you through every step of the rental process and addressing any concerns or queries you may have. With convenient booking options, flexible rental durations, and competitive pricing, VROOM Car Rental makes renting a car easy and accessible for everyone.
          </p>
        </div>
      </div>
      <div className="hot-offers">
        <div className="hot-offers-image">
          <img src={hotOffersImage} alt="Hot Offers" />
        </div>
        <div className="hot-offers-text">
          <h3 className="hot-offers-heading">HOT OFFERS FOR A DAY</h3>
          <p className="hot-offers-description">
            There is a special offer available for Nissan cars today! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non nunc sit amet mi hendrerit aliquet. Proin id ligula sed lectus varius tincidunt. Fusce quis ex ut orci posuere varius. Donec mollis risus et ligula aliquet, sit amet auctor turpis tempus. Nullam fermentum sagittis eros, nec consequat odio fermentum sit amet. Nam at pulvinar elit. Nullam commodo lacus non odio ultricies, sed laoreet leo tristique.
          </p>
          <p className="hot-offers-description">
            Vestibulum dapibus magna non leo posuere consectetur. In hac habitasse platea dictumst. Sed ut pharetra risus. Nulla facilisi. Vivamus ac vehicula diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Quisque nec ligula in purus convallis cursus. Ut sit amet ullamcorper odio, sit amet dictum orci. Integer vitae nisl ac purus blandit accumsan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
