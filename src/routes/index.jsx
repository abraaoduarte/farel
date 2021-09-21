

import React from 'react'
import Header from "../components/Header";
import { Route } from "react-router-dom";

const RenderRouter = () => {
  return (
    <div>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/teste">
        <Header />
      </Route>
    </div>
  )
};

export default RenderRouter;