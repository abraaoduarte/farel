import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import {Spin } from 'antd';
import history from './history';
import { useAuth } from '../contexts/AuthContext';

import Login from '../pages/Login';
import Header from '../components/Header';
import Layout from '../components/Layout';


function CusomRoutes({ isPrivate, isPublic, ...rest }) {
    const { loading, authenticated } = useAuth();

    if (loading) {
        return <Spin />
    }

    if (isPrivate  && !authenticated) {
        return <Redirect to='/login' />;
    }

    if (isPublic && authenticated) {
        return <Redirect to='/dashboard' />;
    }

    if (isPrivate  && authenticated) {
        return (
            <Layout>
                <Route {...rest} />
            </Layout>
        );
    }

    return <Route {...rest} />;
}

export default function Routes() {
  return (
    <>
        <BrowserRouter history={history}>
            <Switch>
                <CusomRoutes isPublic component={Header} exact path='/' />
                <CusomRoutes isPublic component={Login} exact path='/login' />
                <CusomRoutes isPrivate component={Header} exact path='/dashboard' />
                <CusomRoutes component={Login} />
            </Switch>
        </BrowserRouter>
    </>
  );
}