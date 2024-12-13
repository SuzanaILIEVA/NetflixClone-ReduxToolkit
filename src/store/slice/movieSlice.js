import {createSlice} from '@reduxjs/toolkit';
import {
  getMovieDetail,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpComingMovies,
} from '../actions/movieActions';

const initialState = {
  topRatedMovies: [],
  popularMovies: [],
  upcominMovies: [],
  nowPlayingMovies: [],
  movieDetailData: {},
  trendingMovies: [],
  pending: {
    topRated: false,
    popular: false,
    upcoming: false,
    nowPlaying: false,
    movieDetail: false,
    trending: false,
  },
  error: null,
};
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending.topRated = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.pending.topRated = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending.topRated = false;
      })
      .addCase(getPopularMovies.pending, (state, action) => {
        state.pending.popular = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        state.pending.popular = false;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending.popular = false;
      })
      .addCase(getUpComingMovies.pending, state => {
        state.pending.upcoming = true;
      })
      .addCase(getUpComingMovies.fulfilled, (state, action) => {
        state.upcominMovies = action.payload;
        state.pending.upcoming = false;
      })
      .addCase(getUpComingMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending.upcoming = false;
      })
      .addCase(getNowPlayingMovies.pending, state => {
        state.pending.nowPlaying = true;
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies = action.payload;
        state.pending.nowPlaying = false;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending.nowPlaying = false;
      })
      .addCase(getMovieDetail.pending, state => {
        state.pending.movieDetail = true;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.movieDetailData = action.payload;
        state.pending.movieDetail = false;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.error = action.error;
        state.pending.movieDetail = false;
      })
      .addCase(getTrendingMovies.pending, state => {
        state.pending.trending = true;
      })
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies = action.payload;
        state.pending.trending = false;
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending.trending = false;
      });
  },
});

export default movieSlice.reducer;