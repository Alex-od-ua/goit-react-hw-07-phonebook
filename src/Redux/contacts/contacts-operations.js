import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'components/Services/contacts-api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',

  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.massage);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',

  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContacts(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.massage);
    }
  },
  {
    condition: ({ name, phone }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const phoneNumber = phone;

      const result = contacts.items.find(
        ({ name, phone }) =>
          name.toLowerCase() === normalizedName && phone === phoneNumber
      );

      if (result) {
        alert(`${name}: ${phone} is already in contacts!`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contact/delete',

  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.massage);
    }
  }
);
