import React from "react";
import { ConfigProvider } from "antd";
import { Helmet } from "react-helmet";
import RenderRouter from "./routes";
import { AuthProvider } from './contexts/AuthContext';


const App = () => (
    <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <ConfigProvider componentSize="large">
            <AuthProvider>
                <RenderRouter />
            </AuthProvider>
        </ConfigProvider>
    </>
  );

export default App;