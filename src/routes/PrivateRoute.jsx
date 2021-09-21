import React from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';

  function PrivateRoute({ children, isAuthenticated, ...rest }) {
      console.log('children', children)
      console.log('isAuthenticated', isAuthenticated)
      console.log('rest', {...rest})
        return (
            <Route
                {...rest}
                render={
                ({ location }) => (
                    isAuthenticated
                    ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    ))
                }
            />
        );
}

  export default PrivateRoute;