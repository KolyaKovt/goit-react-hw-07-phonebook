import axios from "axios"

const server = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
})

export const setToken = token => {
  server.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  server.defaults.headers.common.Authorization = ""
}

export const register = async credentials => {
  const { data } = await server.post("/users/signup", credentials)
  setToken(data.token)
  return data
}

export const login = async credentials => {
  const { data } = await server.post("/users/login", credentials)
  setToken(data.token)
  return data
}

export const logout = async () => {
  await server.post("/users/logout")
  clearToken()
}

export const refresh = async token => {
  setToken(token)
  const { data } = await server.get("/users/current")
  return data
}

export const getContacts = async () => {
  const { data } = await server.get("/contacts")
  return data
}

export const addContact = async contact => {
  const { data } = await server.post("/contacts", contact)
  return data
}

export const deleteContact = async id => {
  const { data } = await server.delete(`/contacts/${id}`)
  return data
}
