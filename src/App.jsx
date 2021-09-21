import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import RenderRouter from "./routes";


const App = () => {

  return (
    <ConfigProvider componentSize="large">
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;