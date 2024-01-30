import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import { fetchContacts, deleteContact, addContact } from "./operations"
import { selectFilter } from "../filter/slice"

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
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.error = null
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
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
