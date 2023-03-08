import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'Redux/contacts/contacts-slice';

import { getFilteredContacts } from 'Redux/contacts/contacts-selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = Id => {
    dispatch(deleteContact(Id));
  };

  return (
    <ul className={css.contact__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          <p className={css.contact__name}>
            {name} : {number}
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
