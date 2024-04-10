import React, { useState, useEffect } from 'react';
import './styles/usermanagement.css';

const UserManagement = () => {
  const defaultUsers = [
    { id: 1, name: 'Aram ram', email: 'Aram@example.com', role: 'Customer' },
    { id: 2, name: 'Bram Bram', email: 'Bram@example.com', role: 'Customer' },
    { id: 3, name: 'Yram Yram', email: 'Yram@example.com', role: 'Customer' },
    { id: 4, name: 'Cram Dram', email: 'Cam@example.com', role: 'Customer' },
    { id: 5, name: 'AAARam Ram', email: 'Ram@example.com', role: 'Customer' }
  ];

  const [users, setUsers] = useState(defaultUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    // Fetch users data from backend API here if necessary
  }, []);

  const handleDeleteUser = (userId) => {
    console.log('Deleting user with ID:', userId);
  };

  const handleViewUserProfile = (userId) => {
    console.log('Viewing profile of user with ID:', userId);

  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const handleCategoryFilter = () => {
    setSelectedLetter('');
  };

  const handleSortAlphabetically = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };

  const handleResetSorting = () => {
    setUsers(defaultUsers);
  };

  const filteredUsers = selectedLetter
    ? users.filter(user => user.name.toLowerCase().startsWith(selectedLetter.toLowerCase()))
    : users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="user-controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="category-buttons">
          <button onClick={handleCategoryFilter}>
            Alphabetical Filter
          </button>
        </div>
        <button onClick={handleSortAlphabetically}>Sort Alphabetically</button>
        <button onClick={handleResetSorting}>Reset Sorting</button>
      </div>
      <div className="user-list">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-details">
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
            </div>
            <div className="user-actions">
              <button onClick={() => handleViewUserProfile(user.id)}>View Profile</button>
              <button onClick={() => handleDeleteUser(user.id)}>Remove User</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
