import { createSlice, isAnyOf } from "@reduxjs/toolkit"

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations"

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: "",
}

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isLoggedIn = true
        state.isLoading = false
      })
      .addMatcher(
        isAnyOf(refreshThunk.pending, logoutThunk.pending, loginThunk.pending),
        state => {
          state.isLoading = true
          state.error = ""
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user
          state.isLoggedIn = true
          state.token = payload.token
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(
          logoutThunk.rejected,
          registerThunk.rejected,
          loginThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload
          state.isLoading = false
        }
      )
  },
  selectors: {
    selectUser: state => state.user,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
    selectToken: state => state.token,
    selectError: state => state.error,
  },
})

export const authReducer = slice.reducer
export const {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading,
  selectToken,
  selectError,
} = slice.selectors
