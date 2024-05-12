import React, { useRef, useState } from 'react';
import './signup.css';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'; // Import your firebase configuration
import { setDoc, doc } from 'firebase/firestore';


export default function Signup() {
    const fullnameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
        
            // Sign up the user using Firebase authentication
            const { user } = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
        
            // Store additional user data in Firestore
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                await setDoc(userRef, {
                    fullname: fullnameRef.current.value,
                    username: usernameRef.current.value,
                    email: emailRef.current.value,
                    password:passwordRef.current.value
                });
        
                // Redirect the user after successful signup
                navigate("/", { replace: true });
        
                // Display success message
                alert('Registration successful!');
            } else {
                setError('Failed to create account');
            }
        } catch (error) {
            // Handle errors
            setError('Failed to create account: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main">
            <div className="signup-form-container">
                <div className="signup-form">
                    <div className="signup-header">
                        <p className='signup-sub-text'>Create an Account</p>
                        {error && <Alert variant='danger'>{error}</Alert>}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-textfields">
                            <input type="text" placeholder='Full Name' ref={fullnameRef} required />
                            <input type="email" placeholder='Email' ref={emailRef} required />
                            <input type="text" placeholder='Username' ref={usernameRef} required />
                            <input type="password" placeholder='Password' ref={passwordRef} required />

                            <label htmlFor="">Date of Birth</label>
                            <input type="date" className='input-date' />
                        </div>
                        <div className="signup-footer">
                            <button className='signup-btn' disabled={loading}>Create Account</button>
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}