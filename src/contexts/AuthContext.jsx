import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import history from '../routes/history.routes';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
     api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setLoading(false);
    } else {
      setLoading(false);
      setAuthenticated(false);
    }
  }, []);

  async function handleLogin() {
        setLoading(true);
        try {
            const { data } = await api.post('/authenticate');

            localStorage.setItem('token', JSON.stringify(data.token));

            api.defaults.headers.Authorization = `Bearer ${data.token}`;

            setAuthenticated(true);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw new Error(`Error: ${error}`)
        }
  }

  async function handleLogOut() {
    localStorage.clear();

    setAuthenticated(false);

    history.push('/login');
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, handleLogin, handleLogOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const { authenticated, handleLogin, loading, handleLogOut } = useContext(
    AuthContext
  );

  return { authenticated, handleLogin, loading, handleLogOut };
}

export { AuthProvider, useAuth };