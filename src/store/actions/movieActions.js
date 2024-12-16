import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/verbs';
import {
  CATEGORIES_URL,
  MOVIE_CREDITS_URL,
  MOVIEDETAILS_URL,
  NOW_PLAYING_URL,
  PERSON_DETAIL_URL,
  PERSON_MOVIE_CREDITS_URL,
  POPULAR_URL,
  SEARCH_URL,
  SIMILAR_MOVIE_URL,
  TOP_RATED_URL,
  TRENDING_MOVIES_URL,
  UPCOMING_URL,
} from '../../services/urls';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_URL, params);
    // console.log('top ratedd', response.data.results);

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
    // console.log('Genres ==> ', response.data.genres);
    return response.data.genres;
  },
);

const getMovieDetail = createAsyncThunk('movies/getMovieData', async params => {
  const response = await getRequest(MOVIEDETAILS_URL + params.movieId, params);

  return response.data;
});

const getCastDetails = createAsyncThunk('movies/getCredits', async params => {
  const response = await getRequest(
    `${MOVIE_CREDITS_URL(params.movieId)}`,
    params,
  );
  return response.data.cast;
});

const getSimilarMovies = createAsyncThunk(
  'movies/getSimilarMovies',
  async params => {
    const response = await getRequest(
      `${SIMILAR_MOVIE_URL(params.movieId)}`,
      params,
    );
    return response.data.results;
  },
);

const getPersonDetail = createAsyncThunk(
  'person/getPersonDetail',
  async params => {
    const response = await getRequest(
      `${PERSON_DETAIL_URL(params.personId)}`,
      params,
    );
    // console.log('API Response====>>:', response?.data || response);
    return response.data;
  },
);

const getPersonMovies = createAsyncThunk(
  'person/getPersonMovies',
  async params => {
    const response = await getRequest(
      `${PERSON_MOVIE_CREDITS_URL(params.personId)}`,
      params,
    );
    return response.data.cast;
  },
);

const getSearchMovies = createAsyncThunk(
  'search/getSearchMovies',
  async params => {
    const response = await getRequest(SEARCH_URL, params);
    // console.log('getSearchMovies==>', response.data.results);

    return response.data.results;
  },
);
export {
  getTopRatedMovies,
  getCategories,
  getNowPlayingMovies,
  getPopularMovies,
  getUpComingMovies,
  getMovieDetail,
  getTrendingMovies,
  getCastDetails,
  getSimilarMovies,
  getPersonDetail,
  getPersonMovies,
  getSearchMovies,
};
