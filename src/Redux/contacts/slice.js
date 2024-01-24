import { createSlice, nanoid } from "@reduxjs/toolkit"
import { fetchContacts, deleteContact, addContact } from "./operations"

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      prepare: contact => ({
        payload: {
          ...contact,
          id: nanoid(),
        },
      }),
      reducer: (state, { payload }) => {
        state.contacts.push(payload)
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload)
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        )
      })
      .addMatcher(
        action => action.type.endsWith("/pending"),
        state => {
          state.isLoading = true
        }
      )
      .addMatcher(
        action => action.type.endsWith("/fulfilled"),
        state => {
          state.isLoading = false
        }
      )
      .addMatcher(
        action => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload
        }
      )
  },
  selectors: {
    selectContacts: state => state.contacts,
    selectContactsAmount: state => state.contacts.length,
    selectIsLoading: state => state.isLoading,
  },
})

export const contactsReducer = contactsSlice.reducer

export const {
  selectContacts,
  selectContactsAmount,
  selectIsLoading,
} = contactsSlice.selectors
