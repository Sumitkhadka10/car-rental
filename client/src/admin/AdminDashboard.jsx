import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import CarManagement from './carmanagement';
import BookingManagement from './bookingmanagement';
import UserManagement from './usermanagement';
import Settings from './setting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('carmanagement');
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  // Simulating fetching total users and total income from backend
  useEffect(() => {
    // Assuming you have a function to fetch total users and total income from backend
    const fetchDashboardData = async () => {
      try {
        // Example API call to fetch total users and total income
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        setTotalUsers(data.totalUsers);
        setTotalIncome(data.totalIncome);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const handleSectionClick = (path) => {
    setActiveSection(path);
    navigate(`/admin/${path}`);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-profile-container">
          <div className="user-profile">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
            Admin
          </div>
          <button className="sign-out-button">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign Out
          </button>
        </div>
        <ul>
          <li>
            <button
              onClick={() => handleSectionClick('carmanagement')}
              className={activeSection === 'carmanagement' ? 'active' : ''}
            >
              Car Management
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionClick('bookingmanagement')}
              className={activeSection === 'bookingmanagement' ? 'active' : ''}
            >
              Booking Management
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionClick('usermanagement')}
              className={activeSection === 'usermanagement' ? 'active' : ''}
            >
              User Management
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionClick('setting')}
              className={activeSection === 'setting' ? 'active' : ''}
            >
              Settings
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="content">
        <div className="big-picture-container">{/* Add your big picture here */}</div>
        <div className="dashboard-content">
          <div className="dashboard-row">
            <div className="dashboard-item">
              <h2>Total Cars Rented</h2>
              <p>50</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Amount Received</h2>
              <p>1000</p>
            </div>
          </div>
          <div className="dashboard-row">
            <div className="dashboard-item">
              <h2>Total Number of Cars</h2>
              <p>200</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Cars Booked</h2>
              <p>20</p>
            </div>
          </div>
          <div className="dashboard-row">
            <div className="dashboard-item">
              <h2>Total Number of Users</h2>
              <p>{totalUsers}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Income</h2>
              <p>{totalIncome}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="carmanagement" element={<CarManagement />} />
        <Route path="bookingmanagement" element={<BookingManagement />} />
        <Route path="usermanagement" element={<UserManagement />} />
        <Route path="setting" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
