import React from 'react'

import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import '../components/FormLayout.css'
import { login } from '../actions/session'

const LoginFormLayout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

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
    <form onSubmit={handleSubmit(handleUserLogin)}>
      <input
        type='text'
        placeholder='Username'
        name='username'
        className={`form__input ${errors.usernameRequired ? 'form__input--error' : ''}`}
        {...register("usernameRequired", { required: true })}
      />
      {errors.usernameRequired && <span className='form__error'>Username is required</span>}
      <input
        type='password'
        placeholder='Password'
        name='password'
        className={`form__input ${errors.passwordRequired ? 'form__input--error' : ''}`}
        {...register("passwordRequired", { required: true })}
      />
      {errors.passwordRequired && <span className='form__error'>Password is required</span>}
      <button
        type='submit'
        className='form__btn form__btn--submit'
      >
        Log In
      </button>
      <button
        onClick={handleDemoLogin}
        className='form__btn form__btn--demo'
      >
        Demo
      </button>
      <Link to='/signup'>Not on Pinterest yet? Sign up</Link>
    </form>
  )
}

export default LoginFormLayout