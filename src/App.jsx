import React from "react";
import { ConfigProvider } from "antd";
import { Helmet } from "react-helmet";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';

import Routes from './routes'
import history from './routes/history'

const App = () => (
    <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <ConfigProvider componentSize="large">
            <AuthProvider>
                <BrowserRouter history={history}>
                    <Routes />
                </BrowserRouter>
            </AuthProvider>
        </ConfigProvider>
    </>
  );

export default App;