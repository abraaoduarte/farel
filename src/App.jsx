import React from "react";
import { ConfigProvider } from "antd";
import RenderRouter from "./routes";
import { AuthProvider } from './contexts/AuthContext';


const App = () => (
    <ConfigProvider componentSize="large">
        <AuthProvider>
            <RenderRouter />
        </AuthProvider>
    </ConfigProvider>
  );

export default App;