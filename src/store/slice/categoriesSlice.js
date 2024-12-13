import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/movieActions';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    pending: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.pending = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default categoriesSlice.reducer;
