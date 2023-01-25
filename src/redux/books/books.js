import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2kecdTt0T9jUNqwudIao/books';
// Action
const initialState = {
  books: [],
};
// eslint-disable-next-line react-hooks/rules-of-hooks
export const ADD_BOOK = createAsyncThunk('ADD_BOOK', async (payload) => {
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
});

export const REMOVE_BOOK = createAsyncThunk('REMOVE_BOOK', async (payload) => {
  await fetch(`${apiUrl}/${payload}`, {
    method: 'DELETE',
  });
});

const counterSlice = createSlice({
  name: 'editlist',
  initialState,
  reducers: {
    ADD_BOOK: (state, action) => {
      state.books = [...state.books, action.payload];
      return state;
    },
    REMOVE_BOOK: (state, action) => {
      state.books = state.books.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});
export default counterSlice.reducer;
