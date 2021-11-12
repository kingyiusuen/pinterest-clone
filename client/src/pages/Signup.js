import React from 'react'

import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { login, signup } from '../actions/session'

const SignupFormLayout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

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
    <form onSubmit={handleSubmit(handleSignup)}>
      <input
        type='text'
        placeholder='Username'
        name='username'
        className={`form__input ${errors.usernameRequired ? 'form__input--error' : ''}`}
        {...register("usernameRequired", { required: true })}
      />
      {errors.usernameRequired && <span className='form__error'>Username is required</span>}
      <input
        type='text'
        placeholder='Name'
        name='name'
        className={`form__input ${errors.nameRequired ? 'form__input--error' : ''}`}
        {...register("nameRequired", { required: true })}
      />
      {errors.nameRequired && <span className='form__error'>Name is required</span>}
      <input
        type='password'
        placeholder='Password'
        name='password'
        className={`form__input ${errors.passwordRequired ? 'form__input--error' : ''}`}
        {...register("passwordRequired", { required: true })}
      />
      {errors.passwordRequired && <span className='form__error'>Password is required</span>}
      <button
        className='form__btn form__btn--submit'
        type='submit'
      >
        Sign Up
      </button>
      <Link to='/login'>Already a member? Log in</Link>
    </form>
  )
}

export default SignupFormLayout