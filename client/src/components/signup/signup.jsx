import React from 'react';
import './signup.css';


const CLIENT_ID = '548860831968-2ic30h94q04hi5nk3v2oid5hjvuvvudv.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:3000';

export default function Signup() {
    // Construct the URL for Google's OAuth consent screen
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`;

    const handleGoogleSignup = () => {
        // Redirect the user to Google's OAuth consent screen
        window.location.href = authUrl;
    }

    return (
        <div className="main">
            <div className="signup-form-container">
                <div className="signup-form">
                    <div className="signup-header">
                        <p className='signup-main-text'>VROOM Car Rental</p>
                        <p className='signup-sub-text'>Create an Account</p>
                    </div>
                    <div className="signup-textfields">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder='Enter your full name' />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter your email' />

                        <label htmlFor="">Date of Birth</label>
                        <input type="date" className='input-date' />

                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='Enter your username' />

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter your password' />
                    </div>
                    <div className="signup-footer">
                        <button className='signup-btn'>Create Account</button>
                        <p>Already have an account? <span className='signup-to-login'>Sign in</span></p>
                    </div>
                    <div className="signup-footer">
                        <button className='signup-btn' onClick={handleGoogleSignup}>Signup with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
}