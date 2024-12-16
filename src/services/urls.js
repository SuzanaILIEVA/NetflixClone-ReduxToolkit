export const BASE_URL = 'https://api.themoviedb.org/3/';
export const UPCOMING_URL = 'movie/upcoming';
export const POPULAR_URL = 'movie/popular';
export const TOP_RATED_URL = 'movie/top_rated';
export const NOW_PLAYING_URL = 'movie/now_playing';
export const CATEGORIES_URL = 'genre/movie/list';
export const MOVIEDETAILS_URL = 'movie/';

//
export const TRENDING_MOVIES_URL = 'trending/movie/day';
export const MOVIE_CREDITS_URL = id => `movie/${id}/credits`; //CAST DETAILS
export const SIMILAR_MOVIE_URL = id => `movie/${id}/similar`;

export const PERSON_DETAIL_URL = id => `person/${id}`;
export const PERSON_MOVIE_CREDITS_URL = id => `person/${id}/movie_credits`;
export const SEARCH_URL = 'search/movie';

//
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const LOGO_URL = 'https://image.tmdb.org/t/p/original';
