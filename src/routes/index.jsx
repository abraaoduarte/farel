import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin } from 'antd';

import { Context } from '../Context/AuthContext';
import Layout from '../components/Layout';

import Login from '../pages/login';
import UserRoutes from '../pages/users/routes';
import DashbpardRoutes from '../pages/dashboard/routes';

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);

    if (loading) {
        return <Spin />
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />
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
        <Switch>
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute isPrivate path="/users" component={UserRoutes} />
            <CustomRoute isPrivate exact path="/dashboard" component={DashbpardRoutes} />
            <Redirect to="/login" />
        </Switch>
    );
}