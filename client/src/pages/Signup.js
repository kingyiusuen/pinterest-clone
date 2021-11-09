import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/Form/FormContainer'
import FormHeader from '../components/Form/FormHeader'
import FormBodyWrapper from '../components/Form/FormBodyWrapper'
import FormFooter from '../components/Form/FormFooter'
import FormLink from '../components/Form/FormLink'
import FormButton from '../components/Form/FormButton'
import { signup } from '../services/users'

const SignupForm = ({ setUser }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = (event) => {
    event.preventDefault()
    const newUser = {
      username: username,
      name: name,
      password: password,
    }
    signup(newUser)
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <FormButton
            onClick={handleSignup}
            type="submit"
            backgroundColor='red'
          >
            Sign Up
          </FormButton>
          <FormLink to='/login'>Already a member? Log in</FormLink>
        </form>
      </FormBodyWrapper>
      <FormFooter />
    </FormContainer>
  )
}

export default SignupForm