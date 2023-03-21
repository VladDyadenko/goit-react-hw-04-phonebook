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

// class App extends Component {

//   state = {
//     contacts: [],
//     filter:'',
//   }

//   componentDidMount(){

//     const LocalContacts= JSON.parse(localStorage.getItem('contacts'));

//     if(LocalContacts) {
//       this.setState({contacts: LocalContacts});
//     }

//   }

//   componentDidUpdate(prevState){

//     if(this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }

//   }

//   addContact =({name, number})=>{

//     const {contacts} = this.state;

//     const newContact =  {id: nanoid(), name, number};

//     contacts.some(contact =>
//       contact.name.toLowerCase() === name.toLowerCase()) ?
//       alert(`${name} is already in contacts.`) :

//           this.setState(({contacts}) => (
//         {contacts:[newContact, ...contacts]}
//       ));

//   };

//   hendleDeleteContact =(contactId)=>{

//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !==contactId)
//     }));

//   };

//   changeFilter =(e)=>{
//     this.setState({filter: e.currentTarget.value});
//   }

//   getContactOnFilter =()=>{
//     const {contacts, filter} = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return  contacts.filter(({name})=> name.toLowerCase().includes(normalizedFilter),);

//   }

//   render() {

//     const contactList = this.getContactOnFilter();
//     const Length = contactList.length;
//     const hendleDeleteContact = this.hendleDeleteContact;
//     const filter = this.state.filter;
//     const changeFilter = this.changeFilter;
//     const contact = this.addContact;

//      return (

//       <Container>
//         <Title title="Phonebook"></Title>
//         <ContactForm onSubmit={contact}></ContactForm>
//         <div>
//           <Title title="Contacts"></Title>
//           <Filter value={filter} onChange = {changeFilter}></Filter>
//           {Length > 0 ?
//           <ContactList contactList={contactList} hendleDeleteContact={hendleDeleteContact}></ContactList>
//           : <Massege info='No contacts to display'></Massege>}
//         </div>
//       </Container>

//     )

//   };

// };

export default App;
