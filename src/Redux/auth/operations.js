import { createAsyncThunk } from "@reduxjs/toolkit"
import { login, logout, refresh, register } from "../../services/api"

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const user = await register(credentials)
      return user
    } catch (error) {
      if (error.response.data?.code === 11000) {
        return thunkApi.rejectWithValue("Email in use. Try another")
      }
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const user = await login(credentials)
      return user
    } catch (error) {
      if (error.response.status === 400) {
        return thunkApi.rejectWithValue("Credentials is not valid")
      }
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const refreshThunk = createAsyncThunk(
  "refresh",
  async (token, thunkApi) => {
    try {
      const user = await refresh(token)
      return user
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await logout()
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})
