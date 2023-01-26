import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2kecdTt0T9jUNqwudIao/books';
// Action
export const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
  isLoading: false,
  list: null,
  msg: '',
});

export const LIST_BOOKS = createAsyncThunk('LIST_BOOKS', async () => {
  const response = await fetch(apiUrl);
  return response.json();
});

export const counterSlice = createSlice({
  name: 'booklist',
  initialState,
  reducers: {
    ADDBOOK: (state, action) => {
      state.list = [...state.list, action.payload];
      return state;
    },
    REMOVEBOOK: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LIST_BOOKS.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LIST_BOOKS.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(LIST_BOOKS.rejected, (state, action) => {
      state.msg = action.payload;
    });
  },
});

export const ADD_BOOK = (payload) => async () => {
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  window.location.reload();
};

export const REMOVE_BOOK = (payload) => async () => {
  await fetch(`${apiUrl}/${payload}`, {
    method: 'DELETE',
  });
  window.location.reload();
};

export default counterSlice.reducer;
export const { ADDBOOK, REMOVEBOOK } = counterSlice.actions;
