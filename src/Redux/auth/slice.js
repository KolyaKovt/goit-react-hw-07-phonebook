import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLogged: false,
  isLoading: false,
}

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => {
    builder.addCase()
  }
})

export const reducer = slice.reducer
