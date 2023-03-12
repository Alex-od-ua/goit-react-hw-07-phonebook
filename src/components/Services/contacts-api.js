import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://64074a06862956433e6ae941.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
