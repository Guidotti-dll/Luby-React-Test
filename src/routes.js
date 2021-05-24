import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Follow from './pages/Follow';
import Repositories from './pages/Repositories';
import { SelectedUserContext } from './context/SelectedUserContext';
import { UserContext } from './context/UserContext';
import PrivateRoute from './components/Privateroute';

 const Routes = () => {
  const {selectedUser, setSelectedUser} = useContext(SelectedUserContext);
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    if(!user){
      setUser(JSON.parse(localStorage.getItem('userStorage')));
    }

    if(!selectedUser){
      setSelectedUser(JSON.parse(localStorage.getItem('selectedUserStorage')));
    }
  })

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home"  component={Home} />
        <PrivateRoute path="/following"  component={selectedUser ? Home : Follow} />
        <PrivateRoute path="/followers"  component={selectedUser ? Home : Follow} />
        <PrivateRoute path="/repositories"  component={Repositories} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
