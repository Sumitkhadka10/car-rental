// Settings.jsx
import React from 'react';
import './styles/setting.css';

const Settings = () => {
  const handleClearCache = () => {
    alert('Cache cleared successfully!');
  };

  const handleBackupData = () => {
    alert('Data backup initiated!');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-item">
        <h3>Clear Cache</h3>
        <button onClick={handleClearCache}>Clear Cache</button>
        <p>This action will clear the website cache.</p>
      </div>
      <div className="settings-item">
        <h3>Backup Data</h3>
        <button onClick={handleBackupData}>Backup Data</button>
        <p>This action will backup all data.</p>
      </div>
    </div>
  );
};

export default Settings;
