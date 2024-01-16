import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/store';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
export const App = () => {
  return (
    <div>
      <PersistGate loading={null} persistor={persistor}>
        <ContactForm />
        <Filter />
        <ContactList />
      </PersistGate>
    </div>
  );
};
