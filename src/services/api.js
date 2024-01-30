import axios from "axios"

const server = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
})

export const registerUser = async credentials => {
  const { data } = await server.post("/users/signup", credentials)

  return data
}

export const loginUser = async credentials => {
  const { data } = await server.post("/users/login", credentials)

  return data
}
