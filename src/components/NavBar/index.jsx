import React, { useContext } from 'react';
import {Nav, Page} from './styled'
import {BiHomeAlt} from 'react-icons/bi'
import {FiGithub} from 'react-icons/fi'
import {BsPeople} from 'react-icons/bs'
import { useHistory, useLocation } from 'react-router';
import { SelectedUserContext } from '../../context/SelectedUserContext';

const NavBar = () => {
  const {pathname} = useLocation();
  const {push} = useHistory();
  const {setSelectedUser} = useContext(SelectedUserContext);

  function handleClearSelectedUser() {
    localStorage.setItem('selectedUserStorage', JSON.stringify(false));
    setSelectedUser(false);
  }

  return(
    <Nav>
      <Page
        here={pathname === '/home'}
        onClick={() => {
          push('/home');
          handleClearSelectedUser();
        }}
      >
        <BiHomeAlt size={25} />
        <span>Home</span>
      </Page>
      <Page
        here={pathname === '/repositories'}
        onClick={() => {
          push('/repositories');
          handleClearSelectedUser();
        }}
      >
        <FiGithub size={25}  />
        <span>Repos</span>
      </Page>
      <Page
        here={pathname === '/followers'}
        onClick={() => {
          push('/followers');
          handleClearSelectedUser();
        }}
      >
        <BsPeople size={25} />
        <span>Seguidores</span>
      </Page>
      <Page
        here={pathname === '/following'}
        onClick={() => {
          push('/following');
          handleClearSelectedUser();
        }}
      >
        <BsPeople size={25} />
        <span>Seguindo</span>
      </Page>
    </Nav>
  )
}

export default NavBar;
