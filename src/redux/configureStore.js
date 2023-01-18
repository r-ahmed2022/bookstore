/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux';
import bookReducer from './books/books';

const reducer = bookReducer;

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
