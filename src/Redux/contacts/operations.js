import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContact, getContacts } from "../../services/api"

export const fetchContactsThunk = createAsyncThunk(
  "fetchContacts",
  async (_, thunkApi) => {
    try {
      const data = await getContacts()
      return data
    } catch (error) {
      return handleError(thunkApi, error)
    }
  }
)

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (contact, thunkApi) => {
    try {
      const data = await addContact(contact)
      return data
    } catch (error) {
      return handleError(thunkApi, error)
    }
  }
)

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    // try {
    //   const res = await server.delete(`contacts/${id}`)
    //   return res.data
    // } catch (error) {
    //   return handleError(thunkApi, error)
    // }
  }
)

const handleError = (thunkApi, error) => {
  return thunkApi.rejectWithValue(error.message)
}
