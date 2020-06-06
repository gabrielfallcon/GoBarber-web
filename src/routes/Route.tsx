import React from 'react'
import {
  RouteProps as ReactDomRouteProps,
  Route as  ReactDomRoute,
  Redirect,
} from 'react-router-dom'

import { useAuth } from '../hooks/Auth'

interface RouteProps extends ReactDomRouteProps {
    isprivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isprivate = false, component: Component ,...rest }) => {
  const { user } = useAuth();

  return(
    <ReactDomRoute
      {...rest}
      render={( location ) => {
        return isprivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{
            pathname:  isprivate ? '/' : '/dashboard',
            state: { from: location }
          }}
          />
        )
      }}
    />
  )
}

export default Route
