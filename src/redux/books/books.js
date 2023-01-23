import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const counterSlice = createSlice({
  name: 'bookList',
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
export const { ADD_BOOK, REMOVE_BOOK } = counterSlice.actions;
export default counterSlice.reducer;
