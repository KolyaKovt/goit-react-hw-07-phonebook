import { useForm } from "react-hook-form"
import { StyledButton, StyledForm, StyledLabel } from "./ContactForm.styled"
import { useDispatch, useSelector } from "react-redux"
import { selectContacts } from "../../Redux/contacts/slice"
import { addContact } from "../../Redux/contacts/operations"

const ContactFrom = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const contacts = useSelector(selectContacts)

  const sumbit = data => {
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.trim().toLowerCase() === data.name.trim().toLowerCase()
    )

    if (filteredContacts.length) {
      alert("There's already a user with that name.")
      return
    }

    dispatch(addContact(data))
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(sumbit)}>
      <StyledLabel htmlFor="name">Name</StyledLabel>
      <input {...register("name")} id="name" />
      <StyledLabel htmlFor="number" required>
        Number
      </StyledLabel>
      <input type="tel" id="number" {...register("phone")} required />
      <StyledButton>Add the contact</StyledButton>
    </StyledForm>
  )
}

export default ContactFrom
