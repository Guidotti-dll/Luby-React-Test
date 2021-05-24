import React, { useContext } from 'react'
import {FiLogOut, FiArrowLeft} from 'react-icons/fi'
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar';
import { SelectedUserContext } from '../../context/SelectedUserContext';
import { UserContext } from '../../context/UserContext';
import { Avatar, Container, Header, Infos, Bio, About } from './styles';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const {selectedUser, setSelectedUser} = useContext(SelectedUserContext);
  const {push} = useHistory();

  const LogOut = () => {
    setUser(false);
    push('/');
    localStorage.clear();
  }

  const handleGoBack = () => {
    setSelectedUser(false)
    localStorage.setItem('selectedUserStorage', JSON.stringify(false));
  }

  const Save = () => {
    setSelectedUser(false)
    setUser(selectedUser);
    localStorage.setItem('userStorage', JSON.stringify(selectedUser));
    localStorage.setItem('selectedUserStorage', JSON.stringify(false));
    push('/home');
  }

  return(
    <>
      <Container>
      <Header>
      <nav className={selectedUser ? '' : 'twoItems'} >
        {selectedUser &&(
          <FiArrowLeft className="goBack" size={22} onClick={() => handleGoBack()} />
        )}
        <div>
          #{selectedUser ? selectedUser.login : user.login}
        </div>
        <button onClick={() => {selectedUser ? Save() : LogOut()}}>
          {selectedUser ? "Salvar" :'Sair'}
          <FiLogOut size={19} color={selectedUser ? "#5CBC29" : "#D03434"} />
        </button>
      </nav>
        <Avatar src={selectedUser ? selectedUser.avatar_url : user.avatar_url} />
      </Header>
      <About>
        <h3>{selectedUser ? selectedUser.name : user.name}</h3>
        <p>{selectedUser ? selectedUser.email : user.email}</p>
        <p>{selectedUser ? selectedUser.location : user.location}</p>
      </About>
      <Infos>
        <div>
          <h2>{selectedUser ? selectedUser.followers : user.followers}</h2>
          <span>Seguidores</span>
        </div>
        <div>
          <h2>{selectedUser ? selectedUser.following : user.following}</h2>
          <span>Seguindo</span>
        </div>
        <div>
          <h2>{selectedUser ? selectedUser.public_repos : user.public_repos}</h2>
          <span>Repos</span>
        </div>
      </Infos>
      <Bio>
        <h3>Bio</h3>
        <p>{selectedUser ? selectedUser.bio : user.bio}</p>
      </Bio>
    </Container>
      <NavBar />
    </>
  )
}

export default Home;
