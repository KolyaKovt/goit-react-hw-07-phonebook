import { useDispatch, useSelector } from "react-redux"

import Layout from "./Layout"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Contacts from "../pages/Contacts"

import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"

import { selectError } from "../Redux/contacts/slice"
import { refreshThunk } from "../Redux/auth/operations"
import "./App.css"
import PrivateRoute from "../routes/PrivateRoute"
import PublicRoute from "../routes/PublicRoute"

function App() {
  const dispatch = useDispatch()
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  if (error) return <h1>{error}</h1>

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
