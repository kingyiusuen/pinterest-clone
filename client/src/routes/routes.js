import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


export const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector(state => state.session.isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/login" />
}

export const NotRequireAuth = ({ children }) => {
  const isAuthenticated = useSelector(state => state.session.isAuthenticated)
  return isAuthenticated ? <Navigate to="/" /> : children
}