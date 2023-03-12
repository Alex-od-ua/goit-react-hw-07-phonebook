import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

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

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchAllContactsLoading, store => {
        store.loading = true;
      })
      .addCase(fetchAllContactsSuccess, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddContactsLoading, store => {
        store.loading = true;
      })
      .addCase(fetchAddContactsSuccess, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContactsLoading, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteContactsSuccess, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },

  // {
  //   [fetchAllContactsLoading]: store => {
  //     store.loading = true;
  //   },
  //   [fetchAllContactsSuccess]: (store, { payload }) => {
  //     console.log(payload);
  //     store.loading = false;
  //     store.items = payload;
  //   },
  //   [fetchAllContactsError]: (store, { payload }) => {
  //     store.loading = false;
  //     store.error = payload;
  //   },
  //   [fetchAddContactsLoading]: store => {
  //     store.loading = true;
  //   },
  //   [fetchAddContactsSuccess]: (store, { payload }) => {
  //     store.loading = false;
  //     store.items.push(payload);
  //   },
  //   [fetchAddContactsError]: (store, { payload }) => {
  //     store.loading = false;
  //     store.error = payload;
  //   },
  //   [fetchDeleteContactsLoading]: store => {
  //     store.loading = true;
  //   },
  //   [fetchDeleteContactsSuccess]: (store, { payload }) => {
  //     store.loading = false;
  //     const index = store.items.findIndex(item => item.id === payload);
  //     store.items.splice(index, 1);
  //   },
  //   [fetchDeleteContactsError]: (store, { payload }) => {
  //     store.loading = false;
  //     store.error = payload;
  //   },
  // },
});
// [fetchAllContactsLoading]: store => {
//   store.isLoading = true;
// },
// [fetchAllContactsSuccess]: (store, { payload }) => {
//   store.isLoading = false;
//   store.items = payload;
// },
// [fetchAllContactsError]: (store, { payload }) => {
//   store.isLoading = false;
//   store.error = payload;
// },

// [fetchAddContactsLoading]: store => {
//   store.isLoading = true;
// },
// [fetchAddContactsSuccess]: (store, { payload }) => {
//   store.isLoading = false;
//   store.items.push(payload);
// },
// [fetchAddContactsError]: (store, { payload }) => {
//   store.isLoading = false;
//   store.error = payload;
// },

// [fetchDeleteContactsLoading]: store => {
//   store.isLoading = true;
// },
// [fetchDeleteContactsSuccess]: (store, { payload }) => {
//   store.isLoading = false;
//   const index = store.items.findIndex(item => item.id === payload);
//   store.items.splice(index, 1);
// },
// [fetchDeleteContactsError]: (store, { payload }) => {
//   store.isLoading = false;
//   store.error = payload;

// addContact: {
//   reducer: (state, { payload }) => {
//     state.push(payload);
//   },
//   prepare: data => {
//     return {
//       payload: {
//         id: nanoid(),
//         ...data,
//       },
//     };
//   },
// },
// deleteContact: (state, { payload }) =>
//   state.filter(({ id }) => id !== payload),

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
