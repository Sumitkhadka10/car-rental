import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../routers/Routers';
// import Signup from '../signup/signup'; 
// import Login from '../login/login';

const Layout = () => {
  return <Fragment>
    <Header/>
    {/* <Signup />
    <Login /> */}
    <div>
        <Routers/>
    </div>
    <Footer/>
  </Fragment>
}

export default Layout;
