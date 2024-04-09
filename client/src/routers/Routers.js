// router.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarListing from '../pages/CarListing';
import CarDetails from '../pages/CarDetails';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound';
import LoginPage from '../components/login/login.jsx';
import Signup from '../components/signup/signup.jsx';
import AdminDashboard from '../admin/AdminDashboard.jsx'; // Import AdminDashboard component
import CarManagement from '../admin/carmanagement';
import BookingManagement from '../admin/bookingmanagement';
import UserManagement from '../admin/usermanagement';
import Settings from '../admin/setting';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cars' element={<CarListing/>}/>
      <Route path='/cars/:slug' element={<CarDetails/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blogs/:slug' element={<BlogDetails/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admin/*' element={<AdminDashboard/>}/> {/* Add AdminDashboard route */}
      <Route path='/admin/carmanagement' element={<CarManagement/>}/> {/* Add CarManagement route */}
      <Route path='/admin/bookingmanagement' element={<BookingManagement/>}/> {/* Add BookingManagement route */}
      <Route path='/admin/usermanagement' element={<UserManagement/>}/> {/* Add UserManagement route */}
      <Route path='/admin/setting' element={<Settings/>}/> {/* Add Settings route */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Routers;
