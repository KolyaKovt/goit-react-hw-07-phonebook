import { configureStore } from "@reduxjs/toolkit"
import { contactsReducer } from "./contacts/slice"
import { filterReducer } from "./filter/slice"
import { userReducer } from "./auth/slice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
    filter: filterReducer,
  },
})
