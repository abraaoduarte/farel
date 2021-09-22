import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import {Spin } from 'antd';
import history from './history';
import { useAuth } from '../contexts/AuthContext';

import Login from '../pages/login';
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

// TODO: Remover esse componente depois que algumas rotas estiverem prontas
const Example = () => (<h1>Example</h1>)


export default function Routes() {
  return (
    <>
        <BrowserRouter history={history}>
            <Switch>
                <CusomRoutes isPublic component={Example} exact path='/' />
                <CusomRoutes isPublic component={Login} exact path='/login' />
                <CusomRoutes isPrivate component={Example} exact path='/dashboard' />
                <CusomRoutes component={Login} />
            </Switch>
        </BrowserRouter>
    </>
  );
}