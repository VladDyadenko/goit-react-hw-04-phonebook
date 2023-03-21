import { useState } from 'react';

import { FaUserPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Btn, Form, Input, Label } from './ContactsForm.styled';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = props;

    onSubmit({ name, number });

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const iconStyles = { fill: '#FFFFFF', marginLeft: '10px' };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handlChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handlChange}
        />
      </Label>
      <Btn type="submit">
        Add contact
        <FaUserPlus style={iconStyles} size={20}></FaUserPlus>
      </Btn>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
