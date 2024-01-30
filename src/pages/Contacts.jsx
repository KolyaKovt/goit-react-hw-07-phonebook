import ContactForm from "../components/ContactFrom"
import Filter from "../components/Filter"
import ContactsList from "../components/ContactsList"
import { selectContactsAmount, selectIsLoading } from "../Redux/contacts/slice"
import { useSelector } from "react-redux"

const Contacts = () => {
  const contactsAmount = useSelector(selectContactsAmount)
  const isLoading = useSelector(selectIsLoading)

  return (
    <>
      <div className="min-h-screen mx-auto w-96">
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