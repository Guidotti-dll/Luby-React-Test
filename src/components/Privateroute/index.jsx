/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SelectedUserContext } from '../../context/SelectedUserContext';
import { UserContext } from '../../context/UserContext';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const {selectedUser, setSelectedUser} = useContext(SelectedUserContext);
  const {user, setUser} = useContext(UserContext);
  let storageUser;

  useEffect(() => {
    console.log('entrou aqui')
    if(!user){
      storageUser = JSON.parse(localStorage.getItem('userStorage'))
      setUser(storageUser);
    }
    if(!selectedUser){
      setSelectedUser(JSON.parse(localStorage.getItem('selectedUserStorage')));
    }
  })

  return (
    <Route
      {...rest}
      render={() => {
        return  user ||storageUser ? (
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
