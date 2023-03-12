import { useSelector, useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'Redux/contacts/contacts-operations';
import {
  getFilteredContacts,
  getContacts,
} from 'Redux/contacts/contacts-selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(getFilteredContacts);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = Id => {
    dispatch(fetchDeleteContact(Id));
  };

  const filteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const filteredItem = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredItem;
  };

  const contactsItem = filteredContacts();

  console.log(contactsItem);

  return (
    <ul className={css.contact__list}>
      {contactsItem.map(({ id, name, phone }) => (
        <li key={id} className={css.contact__item}>
          <p className={css.contact__name}>
            {name} : {phone}
          </p>
          <button
            type="button"
            className={css.contact__btn}
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
