import React from 'react'

import { useDispatch } from 'react-redux'

import Form from '../components/Form/Form'
import FormButton from '../components/Form/FormButton'
import FormLink from '../components/Form/FormLink'
import { login } from '../actions/session'

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleLogin = (event, userData) => {
    event.preventDefault()
    dispatch(login(userData))
  }

  const handleUserLogin = event => {
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    handleLogin(event, userData)
  }

  const handleDemoLogin = event => {
    const userData = {
      username: 'john.doe',
      password: 'johndoe',
    }
    handleLogin(event, userData)
  }

  return (
    <Form onSubmit={handleUserLogin}>
      <input
        type="text"
        placeholder="Username"
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
      />
      <FormButton
        type="submit"
        backgroundColor='red'
      >
        Log In
      </FormButton>
      <FormButton
        onClick={handleDemoLogin}
        backgroundColor='blue'
      >
        Demo
      </FormButton>
      <FormLink to='/signup'>Not on Pinterest yet? Sign up</FormLink>
    </Form>
  )
}

export default LoginForm