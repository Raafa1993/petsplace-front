import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute, Redirect
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const AdminRoute: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  let profiles = user.profiles.map((profile: any) => profile.authority)

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user && profiles.includes("ROLE_ADMIN") ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/login' : '/' }} />
        )
      }}
    />
  );
}

export default AdminRoute;
