import "./App.css";
import ContactForm from "../components/ContactFrom/ContactFrom";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { useSelector } from "react-redux";
import { selectContactsAmount } from "../Redux/contacts/slice";

function App() {
  const contactsAmount = useSelector(selectContactsAmount);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      
      {contactsAmount ? <ContactsList /> : <p>no contacts found</p> }
    </>
  );
}

export default App;
