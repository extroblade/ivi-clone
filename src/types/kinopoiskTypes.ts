export interface iStaff {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: string; //'DIRECTOR'|'...'|...
}

export interface iCountry {
  country: string;
}

export interface iGenre {
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

export interface iStaff {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: string; //'DIRECTOR'|
}

export interface iFetchImage {
  type:
    | 'STILL'
    | 'SHOOTING'
    | 'POSTER'
    | 'FAN_ART'
    | 'PROMO'
    | 'CONCEPT'
    | 'WALLPAPER'
    | 'COVER'
    | 'SCREENSHOT';
}
export interface iFetchOrder {
  type:
    | 'DATE_ASC'
    | 'DATE_DESC'
    | 'USER_POSITIVE_RATING_ASC'
    | 'USER_POSITIVE_RATING_DESC'
    | 'USER_NEGATIVE_RATING_ASC'
    | 'USER_NEGATIVE_RATING_DESC';
}

export interface iPerson {
  personId: number;
  webUrl: string;
  nameRu: string;
  nameEn: string;
  sex: 'MALE' | 'FEMALE';
  posterUrl: string;
  growth: number;
  birthday: string;
  death: string;
  age: number;
  birthplace: string;
  deathplace: string;
  profession: string;
  facts: iFacts[];
  spouses: any[];
  films: iFilm[];
}

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

export interface iTop {
  pagesCount: number;
  films: any[];
}

export interface iImagesRequest {
  image:
    | 'STILL'
    | 'SHOOTING'
    | 'POSTER'
    | 'FAN_ART'
    | 'PROMO'
    | 'CONCEPT'
    | 'WALLPAPER'
    | 'SCREENSHOT';
}

export interface iImages {
  total: number;
  items: iImagesItems[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface iImagesItems {
  //
}

export interface iSimilar {
  total: number;
  items: iSimilarItems[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface iSimilarItems {
  //
}

export interface iPremires {
  total: number;
  items: iPremiresItem[];
}

export interface iPremiresItem {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: iCountry[];
  genres: iGenre[];
  duration: number;
  premiereRu: string;
}

export interface iFilters {
  genres: iGenre[];
  countries: iCountry[];
}

export interface iSequelsPrequels {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface iKeywordSearch {
  keyword: string;
  pagesCount: number;
  searchFilmsCountResult: number;
  films: any[];
}

export interface iRelease {
  page: number;
  total: number;
  releases: iReleaseItem[];
}

export interface iReleaseItem {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: iCountry[];
  genres: iGenre[];
  rating: number;
  ratingVoteCount: number;
  expectationsRating: number;
  expectationsRatingVoteCount: number;
  duration: number;
  releaseDate: string;
}

export interface iFilm {
  kinopoiskId: number;
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
  filmLength: number; //todo: humanize function
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string; // 'POST_PRODUCTION' | '...' |
  type: string; // 'FILM' | '...' |
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
}
