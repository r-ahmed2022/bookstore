import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  list: null,
  isError: false,
};
export const LIST_DATA = createAsyncThunk('LIST_DATA', async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2kecdTt0T9jUNqwudIao/books');
  return response.json();
});
const counterSlice = createSlice({
  name: 'booklist',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LIST_DATA.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LIST_DATA.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(LIST_DATA.rejected, (state) => {
      state.isError = true;
    });
  },
});
export default counterSlice.reducer;
