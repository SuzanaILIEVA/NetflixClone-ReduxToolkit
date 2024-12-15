import {createSlice} from '@reduxjs/toolkit';
import {getPersonDetail, getPersonMovies} from '../actions/movieActions';

const personSlice = createSlice({
  name: 'person',
  initialState: {
    personDetail: {},
    personMovies: [],
    pending: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPersonDetail.pending, state => {
        state.pending = true;
      })
      .addCase(getPersonDetail.fulfilled, (state, action) => {
        // console.log('Fulfilled Payload:', action.payload);
        state.personDetail = action.payload;
        state.pending = false;
      })
      .addCase(getPersonDetail.rejected, (state, action) => {
        console.error('Error fetching person detail:', action.error.message);
        state.error = action.error.message;
        state.pending = false;
      })
      .addCase(getPersonMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getPersonMovies.fulfilled, (state, action) => {
        // console.log('Fulfilled Payload:', action.payload);
        state.personMovies = action.payload;
        state.pending = false;
      })
      .addCase(getPersonMovies.rejected, (state, action) => {
        console.error('Error fetching person detail:', action.error.message);
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default personSlice.reducer;
