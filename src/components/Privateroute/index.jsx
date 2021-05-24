/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const {user} = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => {
        return  user  ? (
          <>
            {
                <Component />
            }
          </>
        ) : (
          <Redirect to={{ pathname: '/' }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
