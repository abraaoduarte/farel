import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';


const Create = () => (<h1>Example Criar</h1>)
const Update = () => (<h1>Example Editar</h1>)
const Delete = () => (<h1>Example Deletar</h1>)

export default function Routes() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}/create`} component={Create} />
            <Route exact path={`${path}/update/:id`} component={Update} />
            <Route exact path={`${path}/delete/:id`} component={Delete} />
        </Switch>
    );
}