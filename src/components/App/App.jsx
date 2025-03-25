import ContactList from "../ContactList/ContactList";
import SearchBar from "../SearchBar/SearchBar";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBar></SearchBar>
      <ContactList></ContactList>
    </>
  );
}
