import ContactForm from "../../components/ContactFrom/ContactFrom"
import Filter from "../../components/Filter/Filter"
import ContactsList from "../../components/ContactsList/ContactsList"
import {
  selectContactsAmount,
  selectIsLoading,
} from "../../Redux/contacts/slice"
import { useSelector } from "react-redux"

const Contacts = () => {
  const contactsAmount = useSelector(selectContactsAmount)
  const isLoading = useSelector(selectIsLoading)

  return (
    <>
      <h1 className="text-5xl font-bold">Phonebook</h1>
      <ContactForm />
      <h2 className="text-4xl font-bold mb-5">Contacts</h2>
      <Filter />

      {contactsAmount ? <ContactsList /> : <p>no contacts found</p>}
      {isLoading && <h1>Loading...</h1>}
    </>
  )
}

export default Contacts
