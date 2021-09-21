
import { lazy } from 'react';

const routes = [
  {
    path: 'dashboard',
    component: lazy(() => import('../components/Layout')),
    exact: true
  },
  {
    path: 'users',
    component: lazy(() => import('../components/Layout')),
    exact: true
  }
];

export default routes;