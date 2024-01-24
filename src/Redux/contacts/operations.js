import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const server = axios.create({
  baseURL: "https://65b11340d16d31d11bddff25.mockapi.io/",
})

export const fetchContacts = createAsyncThunk("fetchContacts", async (_, thunkApi) => {
  const res = await server.get("contacts")

  return res.data
})

export const deleteContact = createAsyncThunk("deleteContact", async (id, thunkApi) => {
  const res = await server.delete(`contacts/${id}`)

  return res.data
})
