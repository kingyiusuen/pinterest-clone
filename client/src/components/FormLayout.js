import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import { Outlet } from 'react-router-dom'

import './FormLayout.css'

const FooterIcon = ({ icon, href }) => {
  return (
    <div>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {icon}
      </a>
    </div>
  )
}

const FormLayout = () => {
  return (
    <div className='form'>
      <div className='form__header'>
        <div className='form__logo'>
          <PinterestIcon />
        </div>
        <h1>Welcome to Pinterest</h1>
        <h4>Find new ideas to try</h4>
      </div>
      <div className='form__body'>
        <Outlet />
      </div>
      <div className='form__footer'>
        <FooterIcon
          icon={<GitHubIcon />}
          href='https://www.github.com/kingyiusuen'
        />
        <FooterIcon
          icon={<LinkedInIcon />}
          href='https://www.linkedin.com/in/kingyiusuen'
        />
      </div>
    </div>
  )
}

export default FormLayout