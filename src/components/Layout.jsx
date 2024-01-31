import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useSelector } from "react-redux"
import { selectIsLoading } from "../Redux/auth/slice"
import { FullScreenLoader } from "./FullScreenLoader"

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
