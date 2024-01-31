import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"

import Layout from "./Layout"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Contacts from "../pages/Contacts"
import PublicRoute from "../routes/PublicRoute"
import PrivateRoute from "../routes/PrivateRoute"

import { selectError as selectContactsError } from "../Redux/contacts/slice"
import {
  selectError as selectAuthError,
  selectToken,
} from "../Redux/auth/slice"
import { refreshThunk } from "../Redux/auth/operations"
import "./App.css"

export const App = () => {
  const dispatch = useDispatch()
  const contactsError = useSelector(selectContactsError)
  const authError = useSelector(selectAuthError)
  const token = useSelector(selectToken)

  useEffect(() => {
    if (token) dispatch(refreshThunk(token))
  }, [dispatch, token])

  useEffect(() => {
    if (contactsError) toast.error(contactsError)
    if (authError) toast.error(authError)
  }, [authError, contactsError])

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
