import {configureStore} from '@reduxjs/toolkit';
import watchListSlice from './slice/watchListSlice';
import movieSlice from './slice/movieSlice';
import categoriesSlice from './slice/categoriesSlice';

const store = configureStore({
  reducer: {
    watchListStore: watchListSlice,
    movieStore: movieSlice,
    categoriesStore: categoriesSlice,
  },
});

export default store;
