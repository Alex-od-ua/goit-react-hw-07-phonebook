import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'Redux/contacts/contacts-slice';

import { getContacts } from 'Redux/contacts/contacts-selectors';

import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

export function ContactForm() {
  const [contact, setContacts] = useState({ name: '', number: '' });

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const { name, number } = contact;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    setContacts(prevValue => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleAddContact = event => {
    event.preventDefault();

    const newContactItem = { name, number };

    if (
      contacts.find(
        item => item.name.toLowerCase() === newContactItem.name.toLowerCase()
      )
    ) {
      return alert(`${newContactItem.name} is already in contacts!`);
    }

    dispatch(addContact(newContactItem));

    reset();
  };

  const reset = () => {
    setContacts({ name: '', number: '' });
  };

  return (
    <>
      <h1 className={css.main__title}>Phonebook</h1>
      <form className={css.contact__form} onSubmit={handleAddContact}>
        <label htmlFor={nameInputId}>
          Name
          <input
            className={css.input__name}
            placeholder="exemple: Rosie Simpson"
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor={numberInputId}>
          Number
          <input
            className={css.input__number}
            placeholder="exemple: 123-12-12"
            type="tel"
            name="number"
            id={numberInputId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </label>

        <button type="submit" className={css.input__btn}>
          Add contact
        </button>
      </form>
    </>
  );
}
