import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const server = axios.create({
  baseURL: "https://65b11340d16d31d11bddff25.mockapi.io/",
})

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, thunkApi) => {
    try {
      const res = await server.get("contacts")
      return res.data
    } catch (error) {
      return handleError(thunkApi, error)
    }
  }
)

export const addContact = createAsyncThunk(
  "addContact",
  async (contact, thunkApi) => {
    try {
      const res = await server.post(`contacts`, {
        name: contact.name,
        phone: contact.phone,
      })

      return res.data
    } catch (error) {
      return handleError(thunkApi, error)
    }
  }
)

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    try {
      const res = await server.delete(`contacts/${id}`)

      return res.data
    } catch (error) {
      return handleError(thunkApi, error)
    }
  }
)

const handleError = (thunkApi, error) => {
  return thunkApi.rejectWithValue(error.message)
}
