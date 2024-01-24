import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  contacts: [],
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
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload)
    },
  },
  selectors: {
    selectContacts: state => state.contacts,
    selectContactsAmount: state => state.contacts.length,
  },
})

export const contactsReducer = contactsSlice.reducer
export const { addContact, deleteContact } = contactsSlice.actions
export const { selectContacts, selectContactsAmount } = contactsSlice.selectors
