import ContactForm from "../components/ContactForm"
import Filter from "../components/Filter"
import ContactsList from "../components/ContactsList"
import { selectContactsAmount, selectIsLoading } from "../Redux/contacts/slice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchContactsThunk } from "../Redux/contacts/operations"

const Contacts = () => {
  const contactsAmount = useSelector(selectContactsAmount)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])

  return (
    <>
      <div className="min-h-screen mx-auto max-w-[666px] px-12">
        <h1 className="text-5xl font-bold">Phonebook</h1>
        <ContactForm />
        <h2 className="text-4xl font-bold mb-5">Contacts</h2>
        <Filter />

        {contactsAmount ? <ContactsList /> : <p>no contacts found</p>}
        {isLoading && <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default Contacts
