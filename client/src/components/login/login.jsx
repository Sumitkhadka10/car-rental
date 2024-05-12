import React, { useRef, useState } from 'react';
import './login.css'; 
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import your firebase configuration

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
        
            // Sign in the user using Firebase authentication
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            
            // Redirect the user after successful login
            navigate("/admin/*", { replace: true });

            // Show successful login popup
            setShowSuccess(true);
        } catch (error) {
            // Handle errors
            setError('Failed to log in: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main">
            <div className="login-container">
                <div className="form">
                    <div className="login-header">
                        <h2 className='login-sub-text'>Log In</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="login-textfields">
                            <input type="email" placeholder='Email' ref={emailRef} required />
                            <input type="password" placeholder='Password' ref={passwordRef} required />
                        </div>
                        <div className="login-footer">
                            <button className='login-btn' disabled={loading}>Log In</button>
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            {showSuccess && (
                <div className="success-popup">
                    <p>Login successful!</p>
                </div>
            )}
        </div>
    );
}