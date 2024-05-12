import React, { useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = React.createContext();

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to manage authentication state
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate authentication functionality for demonstration
  useEffect(() => {
    // Assume the user is logged in initially
    setCurrentUser({ email: 'test@example.com' });
    setLoading(false);
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}