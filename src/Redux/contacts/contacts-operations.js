import {
  getAllContacts,
  addContacts,
  deleteContacts,
} from 'components/Services/contacts-api';

// import * as actions from './contacts-actions';
import {
  fetchAllContactsSuccess,
  fetchAllContactsLoading,
  fetchAllContactsError,
  fetchAddContactsSuccess,
  fetchAddContactsLoading,
  fetchAddContactsError,
  fetchDeleteContactsSuccess,
  fetchDeleteContactsLoading,
  fetchDeleteContactsError,
} from './contacts-actions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchAllContactsLoading()); // запрос пошел
      const data = await getAllContacts();
      dispatch(fetchAllContactsSuccess(data)); // ответ пришел успешно
    } catch ({ response }) {
      dispatch(fetchAllContactsError(response.data.message)); // ответ пришел с ошибкой
    }
  };

  return func;
};

// export const fetchAllContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchAllContactsLoading()); // заапрос пошел

//       const data = await getAllContacts();
//       console.log(data);

//       dispatch(fetchAllContactsSuccess(data)); // ответ пришел успешно
//     } catch ({ response }) {
//       dispatch(fetchAllContactsError(response.data.message)); // ответ пришел с ошибкой
//     }
//   };
//   return func;
// };

export const fetchAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(fetchAddContactsLoading());
      const result = await addContacts(data);
      dispatch(fetchAddContactsSuccess(result));
    } catch ({ response }) {
      dispatch(fetchAddContactsError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(fetchDeleteContactsLoading());
      await deleteContacts(id);
      dispatch(fetchDeleteContactsSuccess(id));
    } catch ({ response }) {
      dispatch(fetchDeleteContactsError(response.data.message));
    }
  };
  return func;
};
