import { createAsyncThunk } from "@reduxjs/toolkit"
import { login, logout, refresh, register } from "../../services/api"

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const user = await register(credentials)
      return user
    } catch (error) {
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
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const refreshThunk = createAsyncThunk("refresh", async (_, thunkApi) => {
  try {
    const token = thunkApi.getState().auth.token
    if (!token) thunkApi.rejectWithValue("there's no token")
    
    const user = await refresh(token)
    return user
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await logout()
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})
