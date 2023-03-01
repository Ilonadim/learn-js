
'use strict';
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const last = prompt('Один из последних просмотреных фильмов?', ''),
    rate = prompt('На сколько оцените его?', ''),
    last1 = prompt('Один из последних просмотреных фильмов?', ''),
    rate1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[last] = rate;
personalMovieDB.movies[last1] = rate1;

console.log(personalMovieDB);