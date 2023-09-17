// define and export the baseurl and the apikey
export const BASEURL = 'https://api.themoviedb.org/3';
export const GENREURL = 'https://api.themoviedb.org/3/genre/movie/list';
export const NOWPLAYING = 'https://api.themoviedb.org/3/movie/now_playing';
// export const APIKEY = 'a5b6793b90c67a993c96ccdb4bbf3347';
export const Setting = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTAxNzIxZDE1M2JjZmM3MDRlNGMyNmFkZDExNDU5YSIsInN1YiI6IjY1MDA1ZGM1NTU0NWNhMDEzOGQxNWRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PZQorZjBK2q3dvLZEtd0dxTs5EuMH1SiRA_eDuYk1_A'
  }
};
