import { createAsyncThunk } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "../../services/api"

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const user = await registerUser(credentials)
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
      const user = await loginUser(credentials)
      return user
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
