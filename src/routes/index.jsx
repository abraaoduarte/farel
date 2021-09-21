import React, { lazy, Suspense } from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Spin } from 'antd';
import ProtectedRoutes from './ProtectedRoutes ';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { useAuth } from '../contexts/AuthContext';
import history from './history.routes';


const Header = lazy(() => import('../components/Header'));
const Login = lazy(() => import('../pages/Login'));

const RenderRouter = () => {
  const { authenticated } = useAuth();


  return (
    <Router history={history}>
      <Suspense fallback={<Spin />}>
        <Switch>
          <PublicRoute
            path="/login"
            isAuthenticated={authenticated}
          >
            <Login />
          </PublicRoute>
          <PublicRoute
            path="/register"
            isAuthenticated={authenticated}
          >
            <Header />
          </PublicRoute>
          <PublicRoute
            path="/forgot-password"
            isAuthenticated={authenticated}
          >
            <Header />
          </PublicRoute>
          <PrivateRoute
            path="/"
            isAuthenticated={authenticated}
          >
            <ProtectedRoutes />
          </PrivateRoute>
          <Route path="*">
            <Header />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RenderRouter;