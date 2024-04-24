import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faCar } from '@fortawesome/free-solid-svg-icons'; // Assuming faCar is the icon for Car Management

const Sidebar = ({ show }) => {
  const [isCarManagementClicked, setIsCarManagementClicked] = useState(false);

  const handleCarManagementClick = () => {
    setIsCarManagementClicked(!isCarManagementClicked);
  };

  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <ul>
        <li className={isCarManagementClicked ? 'active' : ''}>
          <Link to="/admin/carmanagement" onClick={handleCarManagementClick}>
            <FontAwesomeIcon icon={faCar} />
            Car Management
          </Link>
        </li>
        <li>
          <Link to="/admin/bookingmanagement">Booking Management</Link>
        </li>
        <li>
          <Link to="/admin/usermanagement">User Management</Link>
        </li>
        <li>
          <Link to="/admin/setting">Settings</Link>
        </li>
      </ul>
      <div className="user-profile">
        <FontAwesomeIcon icon={faUser} />
        <span>Admin</span>
      </div>
      <button className="sign-out-button">
        <FontAwesomeIcon icon={faSignOutAlt} />
        Sign Out
      </button>
    </div>
  );
};

export default Sidebar;
