import React from 'react'

import { useDispatch } from 'react-redux'

import Form from '../components/Form/Form'
import FormLink from '../components/Form/FormLink'
import FormButton from '../components/Form/FormButton'
import { login, signup } from '../actions/session'

const SignupForm = () => {
  const dispatch = useDispatch()

  const handleSignup = (event) => {
    event.preventDefault()
    const userData = {
      username: event.target.username.value,
      name: event.target.name.value,
      password: event.target.password.value,
    }
    dispatch(signup(userData))
    dispatch(login(userData))
  }

  return (
    <Form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Username"
        name="username"
      />
      <input
        type="text"
        placeholder="Name"
        name="name"
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
        Sign Up
      </FormButton>
      <FormLink to='/login'>Already a member? Log in</FormLink>
    </Form>
  )
}

export default SignupForm