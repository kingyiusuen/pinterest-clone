import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/Form/FormContainer'
import FormHeader from '../components/Form/FormHeader'
import FormBodyWrapper from '../components/Form/FormBodyWrapper'
import FormFooter from '../components/Form/FormFooter'
import FormLink from '../components/Form/FormLink'
import FormButton from '../components/Form/FormButton'
import { COLOR } from '../constants/styles'
import { login } from '../services/users'

const LoginForm = ({ setUser }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await login({username, password})
      setUsername('')
      setPassword('')
      navigate('/')
    } catch (exception) {
      console.log(exception)
    }

  }

  const demoLogin = () => {
    navigate('/')
  }

  return (
    <FormContainer>
      <FormHeader />
      <FormBodyWrapper>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <FormButton
            onClick={handleLogin}
            type="submit"
            backgroundColor={COLOR.RED}
          >
            Log In
          </FormButton>
          <FormButton
            onClick={demoLogin}
            backgroundColor={COLOR.BLUE}
          >
            Demo
          </FormButton>
          <FormLink to='/signup'>Not on Pinterest yet? Sign up</FormLink>
        </form>
        </FormBodyWrapper>
      <FormFooter />
    </FormContainer>
  )
}

export default LoginForm