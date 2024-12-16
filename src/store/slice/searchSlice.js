import {createSlice} from '@reduxjs/toolkit';
import {getSearchMovies} from '../actions/movieActions';
import {act} from 'react';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    searchResults: [],
    pending: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getSearchMovies.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.pending = false;
      })
      .addCase(getSearchMovies.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default searchSlice.reducer;
