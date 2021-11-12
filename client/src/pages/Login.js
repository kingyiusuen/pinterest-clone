import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../actions/session'
import FormLayout from '../components/FormLayout/FormLayout'

const LoginFormLayout = () => {
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
    <FormLayout onSubmit={handleUserLogin}>
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
      <button
        class='form__btn form__btn--submit'
        type="submit"
        backgroundColor='red'
      >
        Log In
      </button>
      <button
        class='form__btn form__btn--demo'
        onClick={handleDemoLogin}
        backgroundColor='blue'
      >
        Demo
      </button>
      <Link to='/signup'>Not on Pinterest yet? Sign up</Link>
    </FormLayout>
  )
}

export default LoginFormLayout