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
