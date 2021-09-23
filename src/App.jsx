import React from "react";
import { ConfigProvider } from "antd";
import { Helmet } from "react-helmet";
import { BrowserRouter } from 'react-router-dom';
import ptBR from 'antd/lib/locale/pt_BR';
import { AuthProvider } from './Context/AuthContext';

import Routes from './routes'
import history from './routes/history'

const App = () => (
    <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <ConfigProvider componentSize="large" locale={ptBR}>
            <AuthProvider>
                <BrowserRouter history={history}>
                    <Routes />
                </BrowserRouter>
            </AuthProvider>
        </ConfigProvider>
    </>
  );

export default App;