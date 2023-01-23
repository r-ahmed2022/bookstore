import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    bookList: bookReducer,
    categoryList: categoryReducer,
  },
});
export default store;
