import { useState, useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';
import { Container } from './App.styled';

import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import Massege from './Massege';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filters, setFilters] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : setContacts(state => [...state, newContact]);
  };

  const hendleDeleteContact = contactId => {
    setContacts(s => s.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilters(e.currentTarget.value);
  };

  const getContactOnFilter = () => {
    if (filters !== '') {
      const normalizedFilter = filters.toLowerCase();

      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };
  const contactsProcessedFilters = getContactOnFilter();

  return (
    <Container>
      <Title title="Phonebook"></Title>
      <ContactForm onSubmit={addContact}></ContactForm>
      <div>
        <Title title="Contacts"></Title>
        <Filter value={filters} changeFilte={changeFilter}></Filter>
        {contactsProcessedFilters ? (
          <ContactList
            contactList={getContactOnFilter()}
            hendleDeleteContact={hendleDeleteContact}
          ></ContactList>
        ) : (
          <Massege info="No contacts to display"></Massege>
        )}
      </div>
    </Container>
  );
};

export default App;
