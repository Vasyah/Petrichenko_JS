/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
*/


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);
/* 2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false */

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let prop in personalMovieDB) {
    console.log('Свойство: ' + prop + ' Значение: ' + personalMovieDB[prop]);
}
/* 3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    } */

let addMovies = (obj, moviesNum) => {
    for (let i = 0; i < moviesNum; i++) {
        let movieName = prompt('Один из последних просмотренных фильмов?');
        let movieScore = prompt('На сколько оцените его?');
        obj['movies'][movieName] = movieScore;
    }
};

addMovies(personalMovieDB, 2);
console.log(personalMovieDB);
/* Проверить, чтобы все работало без ошибок в консоли */

