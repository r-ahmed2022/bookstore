import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2kecdTt0T9jUNqwudIao/books';
// Action

const initialState = {
  isLoading: false,
  list: null,
  isError: false,
};

export const LIST_DATA = createAsyncThunk('LIST_DATA', async () => {
  const response = await fetch(apiUrl);
  return response.json();
});
export const ADD_BOOK = createAsyncThunk('ADD_BOOK', async (payload) => {
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  window.location.reload();
});

export const REMOVE_BOOK = createAsyncThunk('REMOVE_BOOK', (payload) => {
  fetch(`${apiUrl}/${payload}`, {
    method: 'DELETE',
  });
});

const counterSlice = createSlice({
  name: 'booklist',
  initialState,
  reducers: {
    LIST_DATA: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    ADD_BOOK: (state, action) => {
      state.list = [...state.list, action.payload];
      return state;
    },
    REMOVE_BOOK: (state, action) => {
      const updatedList = state.list.filter((item) => item.id !== action.payload);
      return updatedList;
    },
  },
});
export default counterSlice.reducer;
