import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { StyledMain } from './Layout.styled'

const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>{<Outlet />}</StyledMain>
    </>
  )
}

export default Layout