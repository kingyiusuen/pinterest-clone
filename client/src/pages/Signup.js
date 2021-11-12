import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, signup } from '../actions/session'
import FormLayout from '../components/FormLayout/FormLayout'

const SignupFormLayout = () => {
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
    <FormLayout onSubmit={handleSignup}>
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
      <button
        class='form__btn form__btn--submit'
        type="submit"
        backgroundColor='red'
      >
        Sign Up
      </button>
      <Link to='/login'>Already a member? Log in</Link>
    </FormLayout>
  )
}

export default SignupFormLayout