export const getContacts = state => state.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }

  const filteredItem = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredItem;
};
