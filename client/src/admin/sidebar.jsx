import React from 'react';
import { Link } from 'react-router-dom';
import './styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ show }) => {
  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <ul>
        <li>
          <Link to="/admin/carmanagement">Car Management</Link>
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
