import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa'; 
import '../../styles/header.css';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/cars',
    display: 'Cars'
  },
  {
    path: '/blogs',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {
  return (
    <header className="header">
      {/* Header top */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__left">
                <div>
                  <span className="header__brand-text">VROOM </span>
                  <span className="header__brand-text">Car Rental</span>
                </div>
              </div>
            </Col>

            <Col lg='6' md='6' sm='6'>
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <NavLink to='/login' className='d-flex align-items-center gap-1'>
                  <i className="ri-login-circle-line"></i> Login
                </NavLink>
                <NavLink to='/signup' className='d-flex align-items-center gap-1'>
                  <i className="ri-user-line"></i> Signup
                </NavLink>
                <NavLink to='/admin' className='d-flex align-items-center gap-1'>
                  <FaUserCog /> Admin
                </NavLink>
              </div>
            </Col>
          </Row>

          {/* Main navigation */}
          <Row>
            <Col>
              <div className="navigation__wrapper d-flex align-items-center justify-content-center">
                <div className="navigation">
                  <div className="menu">
                    {navLinks.map((item, index) => (
                      <NavLink to={item.path} className="nav__item" key={index}>
                        {item.display}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </header>
  );
};

export default Header;
