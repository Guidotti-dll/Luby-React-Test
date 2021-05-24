import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {BiLockAlt,BiLockOpenAlt,BiStar} from 'react-icons/bi';
import NavBar from '../../components/NavBar';
import { TabNavigator } from '../../components/TabNavigator';
import { colors } from '../../constants/colors';
import { UserContext } from '../../context/UserContext';
import { Container } from '../Home/styles';
import { Repo } from './styles';

const Repositories = () => {
  const {user} = useContext(UserContext);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios.get(`${user.repos_url}`)
    .then(({data}) => {
      setRepositories(data);
    })
    .catch((errors) => {
      console.log(errors);
    })
  },[])

  return(
    <>
      <Container>
        <TabNavigator />
        <ul style={{width: '100%'}}>
          {repositories.map((repository) => (
            <Repo key={repository.id}>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <div className="status">
                <div className="star">
                <BiStar size={18} color={colors.yellow} />
                {repository.stargazers_count}
                </div>
                <div className="lock" >
                <BiLockOpenAlt size={18} color="#63BF1F" />
                <BiLockAlt size={18}  color="#CC042A" />
                </div>
              </div>
            </Repo>
          ))}
        </ul>
      </Container>
      <NavBar />
    </>
  )
}

export default Repositories;
