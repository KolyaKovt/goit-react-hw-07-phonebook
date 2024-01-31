import React from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import Header from "./Header"
import { FullScreenLoader } from "./FullScreenLoader"

import { selectIsLoading } from "../Redux/auth/slice"

const Layout = () => {
  const isLoading = useSelector(selectIsLoading)

  if (isLoading)
    return <FullScreenLoader />

  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
    </>
  )
}

export default Layout
