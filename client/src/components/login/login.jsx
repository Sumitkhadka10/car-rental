import React, { useState, useEffect, useRef } from 'react';
import './login.css';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts';
import { Alert } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const { login } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/", {replace:true})
      setLoggedIn(true);
      alert('Login successful!');
    } catch (error) {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
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
                  <p onClick={handleForgotPassword} className="forgot-password"><Link to="/forgot-password">Forgot Password</Link>
                  </p>
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
    </form>
  );
};

export default LoginPage;
