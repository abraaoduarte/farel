

import React from 'react'
import { Route } from "react-router-dom";
import Header from "../components/Header";

const RenderRouter = () => (
    <div>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/teste">
        <Header />
      </Route>
    </div>
  );

export default RenderRouter;