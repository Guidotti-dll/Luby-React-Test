import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ContainerLogin, Button, Input } from './styles';
import api from '../../services/api'

import {AiOutlineGithub} from 'react-icons/ai'
import {FiArrowRight} from 'react-icons/fi'
import { colors } from '../../constants/colors';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router';

const Login = () => {
  const [errors, setErrors] = useState('');
  const {setUser} = useContext(UserContext);
  const {push} = useHistory();

  const loginForm = useFormik({
    initialValues: {
      userName : '',
    },
    validationSchema: yup.object().shape({
      userName: yup.string().required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      await api.get(`users/${values.userName}`)
      .then(({data}) => {
        setUser({
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

        push('/home');

      }).catch((error) => {
        console.log(error)
          setErrors('Usuário não encontrado')
      })
    }
  });
  return(
    <ContainerLogin>
      <AiOutlineGithub size={96} color={colors.yellow} />
      <Input>
        <input
          type="text"
          placeholder="Usuário"
          name="userName"
          onChange ={(e) => {
            setErrors('');
            loginForm.handleChange(e)
          }}
          value={loginForm.values.userName}
        />
        {(loginForm.touched.userName && loginForm.errors.userName) || errors ? (
              <div className="error">{errors || loginForm.errors.userName}</div>
            ) : null}
      </Input>
      <Button type="button" onClick={loginForm.submitForm} >
        <span>Entrar</span>
        <FiArrowRight size={22} color={colors.black} />
      </Button>
    </ContainerLogin>
  )
}

export default Login;
