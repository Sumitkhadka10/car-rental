import React, { useState, useEffect } from 'react';
import './login.css';
import { GoogleLogin } from 'react-google-login';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show the "Welcome back" text when the tab is opened
    setShowWelcome(true);
  }, []);

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    alert('Forgot your password?');
  };

  const responseGoogleSuccess = (response) => {
    console.log(response);
  };

  const responseGoogleFailure = (response) => {
    console.error('Google login failed:', response);
  };

  return (
    <div className="container-login">
      <div className="content">
        {showWelcome && (
          <div className="welcome-text">
            <h3>Welcome back !</h3>
          </div>
        )}
        <div className="form">
          <div className="login-container">
            {loggedIn ? (
              <div>
                <h2>Welcome, {username}!</h2>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div>
                <h2>Login</h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <p onClick={handleForgotPassword} className="forgot-password">
                  Forgot Password?
                </p>
                <button onClick={handleLogin}>Login</button>
                <GoogleLogin
                  clientId="548860831968-2ic30h94q04hi5nk3v2oid5hjvuvvudv.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogleSuccess}
                  onFailure={responseGoogleFailure}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
              
            )}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;
