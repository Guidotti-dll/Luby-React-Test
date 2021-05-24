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
import Loading from '../../components/Loading';

const Followers = () => {
  const {user} = useContext(UserContext);
  const {setSelectedUser} = useContext(SelectedUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const {pathname} = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const url = pathname === '/following' ? `https://api.github.com/users/${user.login}/following` : user.followers_url ;

    axios.get(`${url}`)
    .then(({data}) => {
      setFollowers(data);
      setIsLoading(false);
    })
    .catch((errors) => {
      console.log(errors);
      setIsLoading(false);
    })
  },[])

  const handleSelectUser = async (followUrl) => {
    setIsLoading(true);
    await axios.get(`${followUrl}`)
      .then(({data}) => {
        const tempUser = {
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
        }
        setSelectedUser(tempUser);
        localStorage.setItem('selectedUserStorage', JSON.stringify(tempUser));
        setIsLoading(false);

      }).catch((error) => {
        setIsLoading(false);
        console.log(error)
      })
    }

  return(
    <>
      <Container>
      <Loading open={isLoading} />
        <TabNavigator />
        <ul style={{width: '100%'}}>
          {followers.map((follower) => (
            <Follow key={follower.id} onClick={() => handleSelectUser(follower.url)} >
            <img src={follower.avatar_url} alt="avatar"/>
            <p>#{follower.login}</p>
            <FiArrowRight size={20} />
            </Follow>
          ))}
        </ul>
      </Container>
      <NavBar />
    </>
  )
}

export default Followers;
