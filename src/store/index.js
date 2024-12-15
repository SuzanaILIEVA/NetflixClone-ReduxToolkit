import {configureStore} from '@reduxjs/toolkit';
import watchListSlice from './slice/watchListSlice';
import movieSlice from './slice/movieSlice';
import categoriesSlice from './slice/categoriesSlice';
import personSlice from './slice/personSlice';
const store = configureStore({
  reducer: {
    watchListStore: watchListSlice,
    movieStore: movieSlice,
    categoriesStore: categoriesSlice,
    personStore: personSlice,
  },
});

export default store;
