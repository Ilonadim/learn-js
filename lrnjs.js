
'use strict';
const numberOfFilms = +prompt('Скільки фільмів Ви вже переглянули?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const last = prompt('Який був один з останніх фільмів?', ''),
    rate = prompt('На скільки Ви його оціните?', ''),
    last1 = prompt('Який був один з останніх фільмів?', ''),
    rate1 = prompt('На скільки Ви його оціните?', '');

personalMovieDB.movies[last] = rate;
personalMovieDB.movies[last1] = rate1;

console.log(personalMovieDB);