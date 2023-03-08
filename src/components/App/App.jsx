import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import css from './App.module.css';

export function App() {
  return (
    <div className={css.phonebook}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
