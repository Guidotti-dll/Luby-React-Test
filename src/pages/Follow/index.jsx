import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {FiArrowRight} from 'react-icons/fi'
import NavBar from '../../components/NavBar';
import { TabNavigator } from '../../components/TabNavigator';
import { UserContext } from '../../context/UserContext';
import { Container } from '../Home/styles';
import { Follow } from './styles';
import { useLocation } from 'react-router';
import { SelectedUserContext } from '../../context/SelectedUserContext';

const Followers = () => {
  const {user} = useContext(UserContext);
  const {setSelectedUser} = useContext(SelectedUserContext);
  const [followers, setFollowers] = useState([]);
  const {pathname} = useLocation();

  useEffect(() => {
    const url = pathname === '/following' ? `https://api.github.com/users/${user.login}/following` : user.followers_url ;

    axios.get(`${url}`)
    .then(({data}) => {
      setFollowers(data);
    })
    .catch((errors) => {
      console.log(errors);
    })
  },[])

  const handleSelectUser = async (followUrl) => {
    await axios.get(`${followUrl}`)
      .then(({data}) => {
        setSelectedUser({
          login : data.login,
          name : data.name,
          email : data.email,
          location : data.location,
          company : data.company,
          bio : data.bio,
          avatar_url : data.avatar_url,
          followers_url : data.followers_url,
          following_url : data.following_url,
          repos_url : data.repos_url,
          organizations_url : data.organizations_url,
          starred_url : data.starred_url,
          public_repos : data.public_repos,
          public_gists : data.public_gists,
          followers : data.followers,
          following : data.following,
        });


      }).catch((error) => {
        console.log(error)
      })
    }

  return(
    <>
      <Container>
        <TabNavigator />
        <ul style={{width: '100%'}}>
          {followers.map((follower) => (
            <Follow key={follower.id}>
            <img src={follower.avatar_url} alt="avatar"/>
            <p>#{follower.login}</p>
            <FiArrowRight size={20} onClick={() => handleSelectUser(follower.url)} />
            </Follow>
          ))}
        </ul>
      </Container>
      <NavBar />
    </>
  )
}

export default Followers;
