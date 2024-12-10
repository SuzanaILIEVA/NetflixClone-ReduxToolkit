import {configureStore} from '@reduxjs/toolkit';
import watchListSlice from './slice/watchListSlice';

const store = configureStore({
  reducer: {
    watchListStore: watchListSlice,
  },
});

export default store;
