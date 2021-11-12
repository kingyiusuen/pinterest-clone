import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';

import NavBar from '../components/NavBar/NavBar'
import PinGrid from '../components/PinGrid/PinGrid'
import { getSavedPins } from '../actions/pin'


const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 48px;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`

const HeaderAvatarWrapper = styled.div`
  display: flex;
  padding: 12px 0;
`

const HeaderAvatarContainer = styled.div`
  margin: 0 auto;
`

const HeaderAvatar = styled(Avatar)`
  font-size: 40px !important;
  font-weight: 700 !important;
  color: black !important;
  width: 120px !important;
  height: 120px !important;
  background-color: var(--lightgray) !important;
`

const HeaderUsernameWrapper = styled.div`
  color: #111;
  margin: 4px 0;
`

const Profile = () => {
  const dispatch = useDispatch()
  const session = useSelector(state => state.session)

  useEffect(() => {
    dispatch(getSavedPins(session.user.id))
  }, [dispatch, session.user.id])

  const savedPins = useSelector(state => state.pin.saved)

  return (
    <div>
      <NavBar />
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderAvatarWrapper>
            <HeaderAvatarContainer>
              <HeaderAvatar>
                {session.user.name.charAt(0).toUpperCase()}
              </HeaderAvatar>
            </HeaderAvatarContainer>
          </HeaderAvatarWrapper>
          <h1>{session.user.name}</h1>
          <HeaderUsernameWrapper>
            <span>@{session.user.username}</span>
          </HeaderUsernameWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <PinGrid photoUrls={savedPins} savedPins={savedPins}/>
    </div>
  )
}

export default Profile