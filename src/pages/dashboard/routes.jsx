import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';


const Dashboard = () => (<h1>Dashboard</h1>)

export default function Routes() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`} component={Dashboard} />
        </Switch>
    );
}