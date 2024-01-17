import React from 'react';
import css from './ContactsList.module.css';
import { useEffect } from 'react';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  useEffect(() => {
    if (!contacts.length) {
      const storedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (storedContacts) {
        contacts.push(storedContacts);
      }
    }
  }, [contacts]);
  const filteredContacts = contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      .<h3 className={css.contacts_text}>Contacts</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button
                  className={css.delete_btn}
                  value={id}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
