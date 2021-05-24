import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Follow from './pages/Follow';
import Repositories from './pages/Repositories';
import { SelectedUserContext } from './context/SelectedUserContext';

 const Routes = () => {
  const {selectedUser} = useContext(SelectedUserContext);

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home"  component={Home} />
        <Route path="/following"  component={selectedUser ? Home : Follow} />
        <Route path="/followers"  component={selectedUser ? Home : Follow} />
        <Route path="/repositories"  component={Repositories} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
