import "./App.css"
import ContactForm from "../components/ContactFrom/ContactFrom"
import Filter from "./Filter/Filter"
import ContactsList from "./ContactsList/ContactsList"
import { useDispatch, useSelector } from "react-redux"
import { selectContactsAmount } from "../Redux/contacts/slice"
import { useEffect } from "react"
import { fetchContacts } from "../Redux/contacts/operations"
import { selectIsLoading } from "../Redux/contacts/slice"

function App() {
  const contactsAmount = useSelector(selectContactsAmount)
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      {contactsAmount ? <ContactsList /> : <p>no contacts found</p>}
      {isLoading && <h1>Loading...</h1>}
    </>
  )
}

export default App
