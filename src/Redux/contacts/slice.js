import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import {
  fetchContactsThunk,
  deleteContactThunk,
  addContactThunk,
} from "./operations"
import { selectFilter } from "../filter/slice"
import { logoutThunk } from "../auth/operations"

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload)
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        )
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactThunk.fulfilled,
          deleteContactThunk.fulfilled
        ),
        state => {
          state.error = null
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload
        }
      )
  },
  selectors: {
    selectContacts: state => state.contacts,
    selectContactsAmount: state => state.contacts.length,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
  },
})

export const contactsReducer = contactsSlice.reducer

export const {
  selectContacts,
  selectContactsAmount,
  selectIsLoading,
  selectError,
} = contactsSlice.selectors

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],

  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    )
  }
)
