import React, { useState, useEffect, useRef } from 'react';
import './login.css';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts';
import { Alert, Modal, Button } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const responseGoogleSuccess = (response) => {
    console.log(response);
  };

  const responseGoogleFailure = (response) => {
    console.error('Google login failed:', response);
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleCloseForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
  };

  const handleSendResetEmail = () => {
    // Check if the entered email exists in your database
    const isRegisteredEmail = checkIfEmailExists(email);

    if (isRegisteredEmail) {
      // If the email is registered, send the reset email
      // Here you would implement the logic to send the reset email
      alert(`Password reset link sent to ${email}`);
      setShowForgotPasswordModal(false);
    } else {
      // If the email is not registered, show an error message
      alert("This email is not registered. Please enter the email associated with your account.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true })
      setLoggedIn(true);
      alert('Login successful!');
    } catch (error) {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  const checkIfEmailExists = (email) => {
    // Placeholder function to check if the email exists in your database
    // Replace this with your actual logic to check if the email is registered
    // For demonstration, we assume the email is registered if it's not empty
    return email !== '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-login">
        <div className="content">
          {showWelcome && (
            <div className="welcome-text">
              <h3>Welcome back!</h3>
              {error && <Alert variant='danger'>{error}</Alert>}
            </div>
          )}
          <div className="form">
            <div className="login-container">
              {loggedIn ? (
                <div>
                  <h2>Welcome, {email}!</h2>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div>
                  <h2>Login</h2>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                    required
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordRef}
                    required
                  />
                  <br />
                  <div className="sign">Need an account? <Link to="/signup">Sign up</Link></div>
                  <p onClick={handleForgotPassword} className="forgot-password">Forgot Password</p>
                  <button disabled={loading}>Login</button>
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

      {/* Forgot Password Modal */}
      <Modal show={showForgotPasswordModal} onHide={handleCloseForgotPasswordModal}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please enter your email address below. We'll send you a password reset link.</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForgotPasswordModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendResetEmail}>
            Send Reset Email
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default LoginPage;
