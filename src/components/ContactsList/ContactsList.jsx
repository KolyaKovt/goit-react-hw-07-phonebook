import { useDispatch, useSelector } from "react-redux"
import { selectFilteredContacts } from "../../Redux/contacts/slice"
import { deleteContact } from "../../Redux/contacts/operations"

const ContactsList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectFilteredContacts)

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}{" "}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ContactsList
