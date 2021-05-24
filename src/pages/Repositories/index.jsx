import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {BiLockOpenAlt,BiStar} from 'react-icons/bi';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import { TabNavigator } from '../../components/TabNavigator';
import { colors } from '../../constants/colors';
import { UserContext } from '../../context/UserContext';
import { Container } from '../Home/styles';
import { Repo } from './styles';

const Repositories = () => {
  const {user} = useContext(UserContext);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${user.repos_url}`)
    .then(({data}) => {
      setRepositories(data);
      setIsLoading(false);
    })
    .catch((errors) => {
      console.log(errors);
      setIsLoading(false);
    })
  },[])

  return(
    <>
      <Container>
        <Loading open={isLoading} />
        <TabNavigator />
        <ul style={{width: '100%'}}>
          {repositories.map((repository) => (
            <Repo key={repository.id} onClick={() => {window.open(repository.html_url)}} >
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <div className="status">
                <div className="star">
                <BiStar size={18} color={colors.yellow} />
                <span>{repository.stargazers_count}</span>
                </div>
                <div className="lock" >
                <BiLockOpenAlt size={18} color="#63BF1F" />
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
