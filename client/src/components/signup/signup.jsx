import React, { useRef, useState } from 'react';
import './signup.css';
import { useAuth } from '../contexts/AuthContexts';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = '548860831968-2ic30h94q04hi5nk3v2oid5hjvuvvudv.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:3000';

export default function Signup() {
    const { signup } = useAuth()
    // Construct the URL for Google's OAuth consent screen
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`;

    const handleGoogleSignup = () => {
        // Redirect the user to Google's OAuth consent screen
        window.location.href = authUrl;
    }
    const fullnameRef = useRef()
    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const navigate = useNavigate()

    async function handlesubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/", {replace:true})
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('Email is already in use')
            } else {
                setError('Failed to create account')
            }
        }

        setLoading(false)
    }

    return (
        <div className="main">
            <div className="signup-form-container">
                <div className="signup-form">
                    <div className="signup-header">
                        <p className='signup-sub-text'>Create an Account</p>
                        {error && <Alert variant='danger'>{error}</Alert>}
                    </div>
                    <form onSubmit={handlesubmit}>
                        <div className="signup-textfields">
                            <input type="text" placeholder='Enter your full name' ref={fullnameRef} required />
                            <input type="email" placeholder='Enter your email' ref={emailRef} required />
                            <input type="text" placeholder='Enter your username' ref={usernameRef} required />
                            <input type="password" placeholder='Enter your password' ref={passwordRef} required />

                            <label htmlFor="">Date of Birth</label>
                            <input type="date" className='input-date' />
                        </div>
                        <div className="signup-footer">
                            <button className='signup-btn'>Create Account</button>
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </form>
                    <div className="signup-footer">
                        <button disabled={loading} className='signup-btn' onClick={handleGoogleSignup}>Signup with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
}






// src/components/signup/signup.jsx
// import React, { useRef, useState } from 'react';
// import './signup.css';
// import { useAuth } from '../contexts/AuthContexts';
// import { Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { collection, addDoc } from 'firebase/firestore'; // Import addDoc function from Firestore
// import { db } from '../firebase'; // Import db from your firebase.js file

// export default function Signup() {
//     const { signup } = useAuth();
//     const fullnameRef = useRef();
//     const emailRef = useRef();
//     const usernameRef = useRef();
//     const passwordRef = useRef();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handlesubmit = async (e) => {
//         e.preventDefault();

//         try {
//             setError('');
//             setLoading(true);
//             // Signup user
//             const userCredential = await signup(emailRef.current.value, passwordRef.current.value);
//             const user = userCredential.user;
//             // Write user data to Firestore
//             await addDoc(collection(db, 'users'), {
//                 fullName: fullnameRef.current.value,
//                 email: emailRef.current.value,
//                 username: usernameRef.current.value,
//                 userId: user.uid // You might want to store the user ID as well
//             });
//             navigate("/", {replace:true});
//         } catch (error) {
//             if (error.code === 'auth/email-already-in-use') {
//                 setError('Email is already in use');
//             } else {
//                 setError('Failed to create account');
//             }
//         }

//         setLoading(false);
//     };

//     const handleGoogleSignup = () => {
//         // Implement your Google signup logic here
//     };

//     return (
//         <div className="main">
//             <div className="signup-form-container">
//                 <div className="signup-form">
//                     <div className="signup-header">
//                         <p className='signup-sub-text'>Create an Account</p>
//                         {error && <Alert variant='danger'>{error}</Alert>}
//                     </div>
//                     <form onSubmit={handlesubmit}>
//                         <div className="signup-textfields">
//                             <input type="text" placeholder='Enter your full name' ref={fullnameRef} required />
//                             <input type="email" placeholder='Enter your email' ref={emailRef} required />
//                             <input type="text" placeholder='Enter your username' ref={usernameRef} required />
//                             <input type="password" placeholder='Enter your password' ref={passwordRef} required />

//                             <label htmlFor="">Date of Birth</label>
//                             <input type="date" className='input-date' />
//                         </div>
//                         <div className="signup-footer">
//                             <button className='signup-btn'>Create Account</button>
//                             <p>Already have an account? <Link to="/login">Log in</Link></p>
//                         </div>
//                     </form>
//                     <div className="signup-footer">
//                         <button disabled={loading} className='signup-btn' onClick={handleGoogleSignup}>Signup with Google</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
