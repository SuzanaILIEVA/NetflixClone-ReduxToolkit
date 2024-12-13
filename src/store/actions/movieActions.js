import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/verbs';
import {
  CATEGORIES_URL,
  MOVIEDETAILS_URL,
  NOW_PLAYING_URL,
  POPULAR_URL,
  TOP_RATED_URL,
  TRENDING_MOVIES_URL,
  UPCOMING_URL,
} from '../../services/urls';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_URL, params);
    // console.log('top ratedddd', response.data.results);

    return response.data.results;
  },
);

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async params => {
    const response = await getRequest(POPULAR_URL, params);
    return response.data.results;
  },
);

const getUpComingMovies = createAsyncThunk(
  'movies/getUpComingMovies',
  async params => {
    const response = await getRequest(UPCOMING_URL, params);
    return response.data.results;
  },
);

const getNowPlayingMovies = createAsyncThunk(
  'movies/getNowPlayingMovies',
  async params => {
    const response = await getRequest(NOW_PLAYING_URL, params);
    return response.data.results;
  },
);

const getTrendingMovies = createAsyncThunk(
  'movies/getTrendingMovies',
  async params => {
    const response = await getRequest(TRENDING_MOVIES_URL, params);
    return response.data.results;
  },
);

const getCategories = createAsyncThunk(
  'categories/getCategories',
  async params => {
    const response = await getRequest(CATEGORIES_URL, params);
    console.log('Genres ==> ', response.data.genres);
    return response.data.genres;
  },
);

const getMovieDetail = createAsyncThunk('movies/getMovieData', async params => {
  const response = await getRequest(MOVIEDETAILS_URL + params.movieId, params);

  return response.data;
});

export {
  getTopRatedMovies,
  getCategories,
  getNowPlayingMovies,
  getPopularMovies,
  getUpComingMovies,
  getMovieDetail,
  getTrendingMovies,
};
