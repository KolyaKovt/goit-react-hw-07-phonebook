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
    <form onSubmit={handleSubmit(sumbit)} className="card-body mb-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="phone"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  )
}

export default ContactFrom
