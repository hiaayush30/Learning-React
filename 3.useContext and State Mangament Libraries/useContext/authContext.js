import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    const response = await fetch('/api/auth/check');
    const data = await response.json();
    setIsAuthenticated(data.isAuthenticated);
    setLoading(false);
  };

  // It only runs once when the AuthProvider component is mounted, 
  // ie when the AuthProvider component is render onto the DOM
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//is a custom hook to access the context data more conveniently from any component.
//without needing to use useContext every time