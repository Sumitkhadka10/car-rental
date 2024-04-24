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
import AdminDashboard from '../admin/AdminDashboard.jsx';
import CarManagement from '../admin/carmanagement';
import BookingManagement from '../admin/bookingmanagement';
import UserManagement from '../admin/usermanagement';
import Settings from '../admin/setting';
// import ReservationPage from '../pages/ReservationPage'; // Import the ReservationPage component

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
      {/* <Route path='/reservation' element={<ReservationPage/>}/> Route for the reservation page */}
      <Route path='/admin/*' element={<AdminDashboard/>}/>
      <Route path='/admin/carmanagement' element={<CarManagement/>}/> 
      <Route path='/admin/bookingmanagement' element={<BookingManagement/>}/> 
      <Route path='/admin/usermanagement' element={<UserManagement/>}/> 
      <Route path='/admin/setting' element={<Settings/>}/> 
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Routers;
