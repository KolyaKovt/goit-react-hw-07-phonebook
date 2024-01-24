import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
  selectors: {
    selectFilter: state => state,
  },
})

export const filterReducer = filterSlice.reducer
export const { setFilter } = filterSlice.actions
export const { selectFilter } = filterSlice.selectors
