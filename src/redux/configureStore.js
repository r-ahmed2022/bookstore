import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import listReducer from './books/showBookList';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    booklist: listReducer,
    editlist: bookReducer,
    categoryList: categoryReducer,
  },
});
export default store;
