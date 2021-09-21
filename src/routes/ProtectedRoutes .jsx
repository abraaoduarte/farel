import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import routes from './routes';
import Layout from '../components/Layout'

const ProtectedRoutes = () => (
    <Layout>
        <Switch>
            <Suspense
            fallback={<Spin />}
            >
            {routes.map(({ component: Component, path, exact }) => (
                <Route
                path={`/${path}`}
                key={path}
                exact={exact}
                >
                    <Component />
                </Route>
            ))}
            </Suspense>
        </Switch>
    </Layout>
);

export default ProtectedRoutes;