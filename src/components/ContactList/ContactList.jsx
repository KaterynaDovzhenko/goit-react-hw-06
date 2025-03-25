import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  console.log("Contacts in Redux state:", contacts);
  const filter = useSelector(
    (state) => state.filters.status || ""
  ).toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact}></Contact>
          </li>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
}
