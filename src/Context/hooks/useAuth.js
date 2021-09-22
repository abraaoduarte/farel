import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../routes/history';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const getUser = localStorage.getItem('user');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
            setUser(getUser);
        }

        setLoading(false);
    }, []);

    async function handleLogin(payload) {
        try {
            const { data } = await api.post('/api/v1/auth/login', payload);

            localStorage.setItem('token', JSON.stringify(data.result.token));
            localStorage.setItem('user', JSON.stringify(data.result.user));
            api.defaults.headers.Authorization = `Bearer ${data.result.token}`;
            setAuthenticated(true);
            setUser(data.result.user);
        } catch (error) {
            setLoading(false);
            throw new Error(`Error: ${error}`)
        }
    }

    function handleLogout() {
        setAuthenticated(false);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    }

    return { authenticated, loading, handleLogin, handleLogout, user };
}