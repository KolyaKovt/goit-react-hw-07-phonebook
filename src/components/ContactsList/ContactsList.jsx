import { useDispatch, useSelector } from "react-redux"
import { selectContacts, deleteContact } from "../../redux/contacts/slice"
import { selectFilter } from "../../redux/filter/slice"

const ContactsList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)

  const filteredContucts = contacts.filter(contact =>
    contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
  )

  return (
    <ul>
      {filteredContucts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{" "}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ContactsList
