import React, { useContext } from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../context/UserContext';
import { Nav } from './styles';

export const TabNavigator = () => {

  const {pathname} = useLocation();
  const {goBack} = useHistory();
  const {user} = useContext(UserContext);

  return(
    <Nav>
      <FiArrowLeft size={22} onClick={goBack} />
      <p>
        {pathname === '/repositories' ? user.public_repos : pathname === '/following' ? user.following : user.followers }
        {' '}
        {pathname === '/repositories' ? 'Repositórios' : pathname === '/following' ? "Seguindo" : "Seguidores" }
      </p>
    </Nav>
  )
}
