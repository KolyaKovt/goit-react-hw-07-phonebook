import { useDispatch, useSelector } from "react-redux"
import { selectContacts, selectIsLoading } from "../../Redux/contacts/slice"
import { selectFilter } from "../../Redux/filter/slice"
import { useEffect } from "react"
import { deleteContact, fetchContacts } from "../../Redux/contacts/operations"

const ContactsList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const filteredContucts = contacts.filter(contact =>
    contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
  )

  return (
    <>
      <ul>
        {filteredContucts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}{" "}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isLoading && <h1>Loading...</h1>}
    </>
  )
}

export default ContactsList
