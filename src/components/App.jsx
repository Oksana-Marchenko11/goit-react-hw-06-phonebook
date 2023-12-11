import React from 'react';
import css from './App.module.css';
import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts } from '../redux/selectors';
import { getFilter } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filteredContact = useSelector(getFilter);
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList contacts={contacts} />
    </div>
  );
};

// export const App = () => {
//   const [contacts, setContacts] = useState(
//     JSON.parse(window.localStorage.getItem('contacts'))
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = contact => {
//     const nameInContacts = contacts.some(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     );
//     if (nameInContacts) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }

//     const numberInContacts = contacts.some(
//       ({ number }) => number === contact.number
//     );
//     if (numberInContacts) {
//       alert(`${contact.number} is already in contacts`);

//       return;
//     }
//     setContacts(prevContacts => [
//       ...prevContacts,
//       { id: nanoid(), ...contact },
//     ]);
//     console.log(contact);
//     console.log(contacts);
//   };

//   const filterList = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getFilteredContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const filteredContacts = getFilteredContacts();
//   return (
//     <div>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       {contacts.length ? (
//         <Filter value={filter} onFilter={filterList} />
//       ) : (
//         <p className={css.empty}>
//           Your phonebook is empty! Please add first contact!
//         </p>
//       )}
//       {filteredContacts.length ? (
//         <ContactList
//           contacts={filteredContacts}
//           // onDeleteContact={deleteContact}
//         />
//       ) : (
//         <p className={css.empty}>No contacts to show! Please check filter!</p>
//       )}
//     </div>
//   );
// };
