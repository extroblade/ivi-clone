export type MovieVariants = 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'VIDEO' | 'SERIES';

export interface StaffFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  rating: string;
  general: boolean;
  description: string;
  professionKey: ProfessionVariants;
}

export type FilmTypeVariants = 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
export type FilmOrderVariants = 'RATING' | 'NUM_VOTE' | 'YEAR';

export interface iCountry {
  id: string | number;
  country: string;
}

export interface iGenre {
  id: string | number;
  genre: string;
}

export interface iSeasonItems {
  number: number;
  episodes: iEpisodes[];
}

export interface iEpisodes {
  seasonNumber: number;
  episodeNumber: number;
  nameRu: string;
  nameEn: string;
  synopsis: string;
  releaseDate: string;
}

export interface iSeasons {
  total: number;
  items: iSeasonItems[];
}

export interface iExternalSourcesItem {
  url: string;
  platform: string; // 'Okko' ||
  logoUrl: string;
  positiveRating: number;
  negativeRating: number;
  author: string;
  title: string;
  description: string;
}

export interface iExternalSources {
  total: number;
  items: iExternalSourcesItem[];
}

export interface iFactsItems {
  text: string;
  type: string; // 'BLOOPER' | '...' |
  spoiler: boolean;
}

export interface iFacts {
  total: number;
  items: iFactsItems[];
}

export interface iDistributions {
  total: number;
  items: iDistributionsItem[];
}

export interface iDistributionsItem {
  type: string;
  subType: string;
  date: string;
  reRelease: boolean;
  country: iCountry[];
  companies: iCompany[];
}

export interface iCompany {
  name: string;
}

export interface iBoxOffice {
  total: number;
  items: iBoxOfficeItem[];
}

export interface iBoxOfficeItem {
  type: string;
  amount: number;
  currencyCode: string;
  name: string;
  symbol: string;
}

export interface iAwards {
  total: number;
  items: iAwardsItem[];
}

export interface iAwardsItem {
  name: string;
  win: boolean;
  imageUrl: string;
  nominationName: string;
  year: number;
  persons: iPerson[];
}

export interface iFetchedPerson {
  total: number;
  items: iPerson[];
}

export interface iPerson {
  kinopoiskId: number | string;
  personId: number;
  staffId: number;
  webUrl: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  sex: 'MALE' | 'FEMALE';
  posterUrl: string;
  growth: number;
  birthday: string;
  death: string;
  age: number;
  birthplace: string;
  deathplace: string;
  profession: string;
  professionText: string;
  professionKey: ProfessionVariants;
  facts: iFacts[];
  spouses: any[];
  films: StaffFilm[];
}

export type ProfessionVariants =
  | 'ACTOR'
  | 'PRODUCER'
  | 'HIMSELF'
  | 'HRONO_TITR_MALE'
  | 'DIRECTOR'
  | 'WRITER'
  | 'DESIGN'
  | 'VOICE_DIRECTOR'
  | 'TRANSLATOR'
  | 'COMPOSER'
  | 'EDITOR'
  | 'OPERATOR';

export interface iVideos {
  total: number;
  items: iVideosItems[];
}

export interface iVideosItems {
  name: string;
  site: string; //'YOUTUBE' | ''
  url: string;
}

export interface iSimilar {
  total: number;
  items: iSimilarItems[];
}

export interface iSimilarItems {
  filmId: number;
}

export interface iReviewsItem {
  positiveRating: number;
  negativeRating: number;
  author: string;
  date: string;
  description: string;
  kinopoiskId: number;
  title: string;
  type: 'POSITIVE' | 'NEGATIVE';
}

export interface iReviews {
  total: number;
  totalPages: number;
  totalPositiveReviews: number;
  totalNegativeReviews: number;
  totalNeutralReviews: number;
  items: iReviewsItem[];
}

export interface iImages {
  total: number;
  items: iImagesItems[];
}

export interface iImagesItems {
  imageUrl: string;
  previewUrl: string;
}

export interface iFilters {
  genres: iGenre[];
  countries: iCountry[];
}

export interface iFilm {
  kinopoiskId: number;
  languages: string[];
  subtitles: string[];
  persons: iPerson[];
  rating: number;
  professionKey: string;
  filmId: number;
  imdbId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string; // 'POST_PRODUCTION' | '...' |
  type: MovieVariants;
  ratingMpaa: string; // 'r' | '...' |
  ratingAgeLimits: string; // 'POST_PRODUCTION' | '...' |
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: iCountry[];
  genres: iGenre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface iFetchedFilms {
  total: number;
  totalPages: number;
  items: iFilm[];
  films?: iFilm[];
}
