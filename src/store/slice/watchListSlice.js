import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  watchList: [
    {
      id: 1,
      title: 'Lara',
    },
    {
      id: 1,
      title: 'John',
    },
  ],
};

const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addWatchList: (state, action) => {
      state.watchList = [...state.watchList, action.payload];
    },
  },
});

export const {addWatchList} = watchListSlice.actions;

export default watchListSlice.reducer;
