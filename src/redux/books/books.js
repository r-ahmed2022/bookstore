import { v4 as uuidv4 } from 'uuid';

// action name
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// initial state
const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Bear Trap',
      category: 'Action',
      author: 'Hamid Gul',
    }],
};
// action creaters
export const addBook = {
  Type: ADD_BOOK,
  payload: 'buy milk',
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
