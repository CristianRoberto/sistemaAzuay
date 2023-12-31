import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Dashboard = lazy(() => import('../../pages/private/dashboard')); 

function DashboardRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Dashboard} /> 
    </Switch>
  );
}

export default DashboardRoutes;
