import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { selectError } from "../Redux/contacts/slice"
import { useEffect } from "react"
import { fetchContacts } from "../Redux/contacts/operations"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "../pages/Home/Home"
import Contacts from "../pages/Contacts/Contacts"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

function App() {
  const dispatch = useDispatch()
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  if (error) return <h1>{error}</h1>

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
